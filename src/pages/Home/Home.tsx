import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Bell } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate()

    const GoToRegister = () => {
        navigate('/register')
    }
    
    const GoToLogin = () => {
        navigate('/login')
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-red-600 mb-2">BloodLink</h1>
                    <p className="text-xl text-gray-600">Connecting donors, saving lives in Cameroon</p>
                </header>

                <div className="grid gap-8 md:grid-cols-3 mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Heart className="mr-2 text-red-500" />
                                Donate Blood
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Register as a donor and help save lives. Our simplified process makes it easy to contribute.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Users className="mr-2 text-blue-500" />
                                Connect Hospitals
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Hospitals can easily check blood availability and coordinate with blood banks in real-time.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Bell className="mr-2 text-green-500" />
                                Stay Informed
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Receive timely notifications about urgent blood needs and upcoming donation drives.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700" onClick={GoToRegister}>Sign Up as Donor</Button>
                    <Button size="lg" variant="outline" onClick={GoToLogin}>Log In</Button>
                    <Button size="lg" variant="link">Learn More</Button>
                </div>
            </div>
        </div>
    )
}