import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  MapPin, Droplet } from "lucide-react"

export default function DonationHistory() {
    const donations = [
        { id: 1, date: "2024-05-15", location: "Central Hospital", status: "Completed", bloodType: "A+" },
        { id: 2, date: "2024-03-01", location: "Community Blood Drive", status: "Completed", bloodType: "A+" },
        { id: 3, date: "2023-12-10", location: "Red Cross Center", status: "Completed", bloodType: "A+" },
        { id: 4, date: "2023-09-22", location: "Mobile Blood Bank", status: "Deferred", bloodType: "A+" },
    ]

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Donation History</CardTitle>
                    <CardDescription>Your blood donation journey</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {donations.map((donation) => (
                            <div key={donation.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
                                <div className="flex-shrink-0">
                                    <Droplet className={`h-10 w-10 ${donation.status === "Completed" ? "text-red-600" : "text-gray-400"}`} />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">{new Date(donation.date).toLocaleDateString()}</h3>
                                        <Badge variant={donation.status === "Completed" ? "success" : "secondary"}>
                                            {donation.status}
                                        </Badge>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {donation.location}
                                        </div>
                                        <div className="flex items-center mt-1">
                                            <Droplet className="h-4 w-4 mr-2" />
                                            Blood Type: {donation.bloodType}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}