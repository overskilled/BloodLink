import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar as CalendarIcon, Droplet, MapPin, Settings, User, Clock } from "lucide-react"
import { Link } from "react-router-dom"

export default function Dashboard() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Blood<span className="text-red-600">Link</span></h1>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link to={"/notification-settings"}>
                                <Bell className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link to={"/update-personal-info"}>
                                <Settings className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg" alt="Yvan Ouatedem" />
                            <AvatarFallback>YO</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Next Eligible Donation</CardTitle>
                                <CardDescription>Mark your calendar</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-2 text-2xl font-semibold text-red-600">
                                    <CalendarIcon className="h-6 w-6" />
                                    <span>{date?.toDateString()}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link to="/schedule-appointment">Schedule Appointment</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Donation History</CardTitle>
                                <CardDescription>Your contributions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span>Total Donations</span>
                                        <Badge variant="secondary">5</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Last Donation</span>
                                        <Badge variant="outline">April 1, 2024</Badge>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" asChild className="w-full">
                                    <Link to="/donation-history">View Full History</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Upcoming Blood Drives</CardTitle>
                                <CardDescription>Opportunities to donate</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex justify-between items-center">
                                        <span>Central Hospital Drive</span>
                                        <Badge>June 20</Badge>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Community Center Event</span>
                                        <Badge>July 5</Badge>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">Find More Events</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="mt-8">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                                <TabsTrigger value="profile">Profile</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Donor Overview</CardTitle>
                                        <CardDescription>Your blood donation journey at a glance</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <User className="h-6 w-6 text-red-600" />
                                                <div>
                                                    <p className="text-sm font-medium">John Doe</p>
                                                    <p className="text-sm text-muted-foreground">A+ Blood Type</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <Droplet className="h-6 w-6 text-red-600" />
                                                <div>
                                                    <p className="text-sm font-medium">5 Total Donations</p>
                                                    <p className="text-sm text-muted-foreground">Last donated on April 1, 2024</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <MapPin className="h-6 w-6 text-red-600" />
                                                <div>
                                                    <p className="text-sm font-medium">Preferred Donation Center</p>
                                                    <p className="text-sm text-muted-foreground">Central Hospital Blood Bank</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="appointments">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Your Appointments</CardTitle>
                                        <CardDescription>Upcoming and past donation appointments</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <CalendarIcon className="h-6 w-6 text-red-600" />
                                                    <div>
                                                        <p className="text-sm font-medium">Upcoming Appointment</p>
                                                        <p className="text-sm text-muted-foreground">June 15, 2024 at 10:00 AM</p>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm">Reschedule</Button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <Clock className="h-6 w-6 text-gray-400" />
                                                    <div>
                                                        <p className="text-sm font-medium">Past Appointment</p>
                                                        <p className="text-sm text-muted-foreground">April 1, 2024 at 2:00 PM</p>
                                                    </div>
                                                </div>
                                                <Badge>Completed</Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full">
                                            <Link to="/schedule-appointment">Schedule New Appointment</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="profile">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Your Profile</CardTitle>
                                        <CardDescription>Manage your account and preferences</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <Button variant="outline" asChild className="w-full">
                                                <Link to="/update-personal-info">
                                                    <User className="mr-2 h-4 w-4" /> Update Personal Information
                                                </Link>
                                            </Button>
                                            <Button variant="outline" asChild className="w-full">
                                                <Link to="/notification-settings">
                                                    <Bell className="mr-2 h-4 w-4" /> Manage Notification Settings
                                                </Link>
                                            </Button>
                                            <Button variant="outline" className="w-full">
                                                <Settings className="mr-2 h-4 w-4" /> Account Settings
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Donation Calendar</CardTitle>
                                <CardDescription>Plan your future donations</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}