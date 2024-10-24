import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { MapPin, Clock, CalendarDays } from "lucide-react"

export default function ScheduleAppointment() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Schedule a Donation Appointment</CardTitle>
                    <CardDescription>Choose a convenient time and location to donate blood</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Select Location</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a donation center" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="central-hospital">Central Hospital Blood Bank</SelectItem>
                                <SelectItem value="red-cross-center">Red Cross Donation Center</SelectItem>
                                <SelectItem value="community-clinic">Community Health Clinic</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Select Date</label>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Select Time Slot</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose an available time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="09:00">09:00 AM</SelectItem>
                                <SelectItem value="11:00">11:00 AM</SelectItem>
                                <SelectItem value="13:00">01:00 PM</SelectItem>
                                <SelectItem value="15:00">03:00 PM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                        Confirm Appointment
                    </Button>
                    <div className="text-sm text-gray-600">
                        <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> Central Hospital Blood Bank</p>
                        <p className="flex items-center"><CalendarDays className="mr-2 h-4 w-4" /> {date?.toDateString()}</p>
                        <p className="flex items-center"><Clock className="mr-2 h-4 w-4" /> 09:00 AM</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}