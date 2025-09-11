import { useState } from "react";
import { Calendar, DollarSign, AlertTriangle, FileText, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ResultsPanelProps {
  fileName: string;
}

export function ResultsPanel({ fileName }: ResultsPanelProps) {
  const [activeTab, setActiveTab] = useState("summary");

  // Mock data for demonstration
  const summaryData = {
    overview: "This is a standard employment contract between Company ABC and John Doe for a Software Engineer position. The contract includes standard clauses for compensation, benefits, confidentiality, and termination procedures.",
    keyPoints: [
      "Employment type: Full-time, permanent position",
      "Probationary period: 3 months from start date",
      "Work location: Hybrid (3 days office, 2 days remote)",
      "Notice period: 2 weeks for employee, 4 weeks for employer"
    ]
  };

  const keyDatesData = [
    { type: "Start Date", date: "March 15, 2024", icon: Calendar },
    { type: "Probation End", date: "June 15, 2024", icon: Calendar },
    { type: "Review Date", date: "March 15, 2025", icon: Calendar },
    { type: "Base Salary", amount: "$75,000/year", icon: DollarSign },
    { type: "Bonus Potential", amount: "Up to $7,500", icon: DollarSign },
    { type: "Health Benefits", amount: "$200/month", icon: DollarSign }
  ];

  const redFlags = [
    {
      severity: "high",
      title: "Non-compete clause",
      description: "6-month non-compete period may be legally unenforceable in your jurisdiction"
    },
    {
      severity: "medium", 
      title: "Overtime expectations",
      description: "Contract mentions 'reasonable overtime' without specific compensation details"
    },
    {
      severity: "low",
      title: "Vague termination clause",
      description: "Termination for 'poor performance' could benefit from more specific criteria"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
      {/* Left Panel - Analysis */}
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Document Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="summary" className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Summary</span>
                </TabsTrigger>
                <TabsTrigger value="dates-money" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Key Dates & Money</span>
                </TabsTrigger>
                <TabsTrigger value="red-flags" className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Red Flags</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold mb-3">Document Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{summaryData.overview}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Key Points</h3>
                  <ul className="space-y-2">
                    {summaryData.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="dates-money" className="space-y-4 mt-6">
                <div className="grid gap-4">
                  {keyDatesData.map((item, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-dark-gray">{item.type}</p>
                          <p className="text-muted-foreground">
                            {item.date || item.amount}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="red-flags" className="space-y-4 mt-6">
                {redFlags.map((flag, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-dark-gray">{flag.title}</h4>
                          <Badge className={getSeverityColor(flag.severity)}>
                            {flag.severity}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{flag.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - PDF Viewer */}
      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-primary" />
                <span>Document Viewer</span>
              </div>
              <Button variant="outline" size="sm">
                <span className="text-sm">Page 1 of 3</span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-full bg-gray-50 flex items-center justify-center rounded-lg m-4">
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-dark-gray">PDF Viewer</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {fileName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Click highlighted text to see analysis
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}