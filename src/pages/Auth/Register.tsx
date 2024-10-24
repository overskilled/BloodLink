import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function AuthPage() {
    const [step, setStep] = useState(1)
    const totalSteps = 3

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps))
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Sign Up as a Donor</CardTitle>
                    <CardDescription>Step {step} of {totalSteps}</CardDescription>
                </CardHeader>
                <CardContent>
                    {step === 1 && (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" placeholder="+237 123456789" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="bloodType">Blood Type</Label>
                                <Select>
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
                            <div className="space-y-2">
                                <Label htmlFor="dob">Date of Birth</Label>
                                <Input id="dob" type="date" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="weight">Weight (kg)</Label>
                                <Input id="weight" type="number" placeholder="70" />
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="medicalHistory">Medical History</Label>
                                <Textarea
                                    id="medicalHistory"
                                    placeholder="Please provide any relevant medical history..."
                                    rows={4}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastDonation">Last Donation Date (if applicable)</Label>
                                <Input id="lastDonation" type="date" />
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-between">
                    {step == 1 && (
                        <p className="text-sm">Already have an account? <Link to={'/login'} className="text-red-600 hover:underline">connect</Link></p>
                    )}
                    {step > 1 && (
                        <Button variant="outline" onClick={prevStep}>
                            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                    )}
                    {step < totalSteps ? (
                        <Button onClick={nextStep} className="ml-auto">
                            Next <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button className="ml-auto bg-red-600 hover:bg-red-700">
                            Complete Registration
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}