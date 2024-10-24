import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Mail, MessageSquare, Save } from "lucide-react"

export default function NotificationSettings() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Bell className="h-5 w-5 text-red-600" />
                                <Label htmlFor="urgentRequests">Urgent Blood Requests</Label>
                            </div>
                            <Switch id="urgentRequests" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-blue-600" />
                                <Label htmlFor="emailNotifications">Email Notifications</Label>
                            </div>
                            <Switch id="emailNotifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <MessageSquare className="h-5 w-5 text-green-600" />
                                <Label htmlFor="smsNotifications">SMS Notifications</Label>
                            </div>
                            <Switch id="smsNotifications" defaultChecked />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="notificationFrequency">Notification Frequency</Label>
                        <Select defaultValue="immediately">
                            <SelectTrigger id="notificationFrequency">
                                <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="immediately">Immediately</SelectItem>
                                <SelectItem value="daily">Daily Digest</SelectItem>
                                <SelectItem value="weekly">Weekly Summary</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bloodTypeAlerts">Blood Type Alerts</Label>
                        <Select defaultValue="all">
                            <SelectTrigger id="bloodTypeAlerts">
                                <SelectValue placeholder="Select blood types" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Blood Types</SelectItem>
                                <SelectItem value="my-type">Only My Blood Type</SelectItem>
                                <SelectItem value="custom">Custom Selection</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Save className="mr-2 h-4 w-4" /> Save Preferences
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}