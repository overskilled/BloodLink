import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

export default function UpdatePersonalInfo() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Update Personal Information</CardTitle>
                    <CardDescription>Modify your profile details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" defaultValue="+237 123456789" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bloodType">Blood Type</Label>
                            <Select defaultValue="A+">
                                <SelectTrigger id="bloodType">
                                    <SelectValue placeholder="Select your blood type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A+">A+</SelectItem>
                                    <SelectItem value="A-">A-</SelectItem>
                                    <SelectItem value="B+">B+</SelectItem>
                                    <SelectItem value="B-">B-</SelectItem>
                                    <SelectItem value="AB+">AB+</SelectItem>
                                    <SelectItem value="AB-">AB-</SelectItem>
                                    <SelectItem value="O+">O+</SelectItem>
                                    <SelectItem value="O-">O-</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" placeholder="Enter your full address" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="medicalHistory">Medical History</Label>
                        <Textarea
                            id="medicalHistory"
                            placeholder="Update any changes in your medical history..."
                            rows={4}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="availableForDonation" />
                        <Label htmlFor="availableForDonation">Available for donation</Label>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}