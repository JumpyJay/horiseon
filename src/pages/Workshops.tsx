// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Waves,
//   Calendar,
//   MapPin,
//   Clock,
//   Users,
//   CheckCircle,
//   Star,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function WorkshopsPage() {
//   const upcomingWorkshops = [
//     {
//       title: "Water Quality Monitoring",
//       date: "March 15, 2024",
//       time: "9:00 AM - 12:00 PM",
//       location: "Riverside Park, Main Street",
//       capacity: "20 participants",
//       level: "Beginner",
//       description:
//         "Learn to test and analyze water quality parameters while contributing to our ongoing river health assessment. We'll cover pH, dissolved oxygen, turbidity, and nutrient testing.",
//       image: "people testing water quality by river",
//       instructor: "Dr. Sarah Chen",
//       price: "Free",
//       materials: "All materials provided",
//     },
//     {
//       title: "Native Plant Restoration",
//       date: "March 22, 2024",
//       time: "10:00 AM - 3:00 PM",
//       location: "Willow Creek Trail",
//       capacity: "15 participants",
//       level: "All levels",
//       description:
//         "Help restore riparian vegetation and learn about native plants that support healthy river ecosystems. Includes hands-on planting and habitat preparation.",
//       image: "group planting native plants by riverbank",
//       instructor: "Elena Kowalski",
//       price: "Free",
//       materials: "Tools and plants provided",
//     },
//     {
//       title: "Community Mapping Workshop",
//       date: "March 29, 2024",
//       time: "2:00 PM - 5:00 PM",
//       location: "Community Center",
//       capacity: "25 participants",
//       level: "Beginner",
//       description:
//         "Create collaborative maps of our watershed and identify priority areas for conservation efforts. Learn basic GIS skills and contribute to our community knowledge base.",
//       image: "people working on maps and computers",
//       instructor: "Dr. Priya Patel",
//       price: "Free",
//       materials: "Laptops provided",
//     },
//     {
//       title: "Stream Ecology Field Study",
//       date: "April 5, 2024",
//       time: "8:00 AM - 2:00 PM",
//       location: "Cedar Creek Nature Reserve",
//       capacity: "12 participants",
//       level: "Intermediate",
//       description:
//         "Comprehensive field study of stream ecosystems including macroinvertebrate sampling, habitat assessment, and data collection techniques.",
//       image: "researchers studying stream ecosystem",
//       instructor: "Dr. Sarah Chen & James Thompson",
//       price: "Free",
//       materials: "Waders and equipment provided",
//     },
//   ];

//   const pastWorkshops = [
//     {
//       title: "Introduction to Watershed Science",
//       date: "February 18, 2024",
//       participants: 22,
//       rating: 4.8,
//       highlights: [
//         "Basic hydrology concepts",
//         "Local watershed tour",
//         "Water cycle demonstration",
//       ],
//     },
//     {
//       title: "River Photography Workshop",
//       date: "February 10, 2024",
//       participants: 15,
//       rating: 4.9,
//       highlights: [
//         "Nature photography techniques",
//         "Documenting environmental change",
//         "Photo storytelling",
//       ],
//     },
//     {
//       title: "Winter Bird Watching",
//       date: "January 27, 2024",
//       participants: 18,
//       rating: 4.7,
//       highlights: [
//         "Waterfowl identification",
//         "Habitat relationships",
//         "Citizen science data collection",
//       ],
//     },
//   ];

//   const workshopSeries = [
//     {
//       title: "Citizen Science Certification",
//       duration: "4 sessions",
//       description:
//         "Comprehensive training in water quality monitoring, data collection, and analysis techniques.",
//       nextStart: "April 2024",
//     },
//     {
//       title: "Youth River Stewards",
//       duration: "6 sessions",
//       description:
//         "Leadership program for young people interested in environmental conservation and community organizing.",
//       nextStart: "May 2024",
//     },
//     {
//       title: "Advanced Restoration Techniques",
//       duration: "3 sessions",
//       description:
//         "In-depth training on habitat restoration, erosion control, and native plant propagation.",
//       nextStart: "June 2024",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       {/* Header */}
//       <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
//         <Link href="/" className="flex items-center justify-center gap-2">
//           <Waves className="h-6 w-6 text-blue-600" />
//           <span className="font-bold text-xl text-gray-900">RiverWorks</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link
//             href="/"
//             className="text-sm font-medium hover:text-blue-600 transition-colors"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="text-sm font-medium hover:text-blue-600 transition-colors"
//           >
//             About
//           </Link>
//           <Link href="/workshops" className="text-sm font-medium text-blue-600">
//             Workshops
//           </Link>
//           <Link
//             href="/members"
//             className="text-sm font-medium hover:text-blue-600 transition-colors"
//           >
//             Members
//           </Link>
//         </nav>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6 mx-auto">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <Badge variant="secondary" className="w-fit">
//                 Learning Together
//               </Badge>
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
//                 Workshops & Programs
//               </h1>
//               <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Join our hands-on workshops to learn practical skills,
//                 contribute to river conservation, and connect with fellow
//                 environmental stewards in your community.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Workshop Tabs */}
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
//           <div className="container px-4 md:px-6 mx-auto">
//             <Tabs defaultValue="upcoming" className="w-full">
//               <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
//                 <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
//                 <TabsTrigger value="series">Series</TabsTrigger>
//                 <TabsTrigger value="past">Past Events</TabsTrigger>
//               </TabsList>

//               {/* Upcoming Workshops */}
//               <TabsContent value="upcoming" className="mt-12">
//                 <div className="grid gap-8 md:grid-cols-2">
//                   {upcomingWorkshops.map((workshop, index) => (
//                     <Card
//                       key={index}
//                       className="bg-white shadow-lg hover:shadow-xl transition-shadow"
//                     >
//                       <div className="aspect-video relative overflow-hidden rounded-t-lg">
//                         <Image
//                           src={`/placeholder.svg?height=200&width=400&query=${workshop.image}`}
//                           alt={workshop.title}
//                           width={400}
//                           height={200}
//                           className="object-cover w-full h-full"
//                         />
//                         <Badge className="absolute top-4 left-4 bg-blue-600">
//                           {workshop.level}
//                         </Badge>
//                       </div>
//                       <CardHeader>
//                         <CardTitle className="text-gray-900">
//                           {workshop.title}
//                         </CardTitle>
//                         <CardDescription>
//                           {workshop.description}
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4 text-sm">
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Calendar className="h-4 w-4" />
//                             <span>{workshop.date}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Clock className="h-4 w-4" />
//                             <span>{workshop.time}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <MapPin className="h-4 w-4" />
//                             <span>{workshop.location}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Users className="h-4 w-4" />
//                             <span>{workshop.capacity}</span>
//                           </div>
//                         </div>
//                         <div className="border-t pt-4">
//                           <div className="flex justify-between items-center mb-2">
//                             <span className="text-sm text-gray-600">
//                               Instructor:
//                             </span>
//                             <span className="text-sm font-medium">
//                               {workshop.instructor}
//                             </span>
//                           </div>
//                           <div className="flex justify-between items-center mb-4">
//                             <span className="text-sm text-gray-600">
//                               Price:
//                             </span>
//                             <span className="text-sm font-medium text-green-600">
//                               {workshop.price}
//                             </span>
//                           </div>
//                         </div>
//                         <Button className="w-full bg-blue-600 hover:bg-blue-700">
//                           Register Now
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>

//               {/* Workshop Series */}
//               <TabsContent value="series" className="mt-12">
//                 <div className="grid gap-8 md:grid-cols-3">
//                   {workshopSeries.map((series, index) => (
//                     <Card key={index} className="bg-white shadow-lg">
//                       <CardHeader>
//                         <div className="flex items-center justify-between">
//                           <Badge variant="outline">{series.duration}</Badge>
//                           <Badge className="bg-green-100 text-green-800">
//                             {series.nextStart}
//                           </Badge>
//                         </div>
//                         <CardTitle className="text-gray-900">
//                           {series.title}
//                         </CardTitle>
//                         <CardDescription>{series.description}</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <Button
//                           variant="outline"
//                           className="w-full bg-transparent"
//                         >
//                           Learn More
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>

//               {/* Past Workshops */}
//               <TabsContent value="past" className="mt-12">
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   {pastWorkshops.map((workshop, index) => (
//                     <Card key={index} className="bg-white shadow-lg">
//                       <CardHeader>
//                         <div className="flex items-center justify-between">
//                           <Badge variant="outline">{workshop.date}</Badge>
//                           <div className="flex items-center gap-1">
//                             <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                             <span className="text-sm font-medium">
//                               {workshop.rating}
//                             </span>
//                           </div>
//                         </div>
//                         <CardTitle className="text-gray-900">
//                           {workshop.title}
//                         </CardTitle>
//                         <CardDescription>
//                           {workshop.participants} participants
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="space-y-2">
//                           <h4 className="font-medium text-gray-900">
//                             Highlights:
//                           </h4>
//                           <ul className="space-y-1">
//                             {workshop.highlights.map(
//                               (highlight, highlightIndex) => (
//                                 <li
//                                   key={highlightIndex}
//                                   className="flex items-center gap-2 text-sm text-gray-600"
//                                 >
//                                   <CheckCircle className="h-3 w-3 text-green-600" />
//                                   {highlight}
//                                 </li>
//                               )
//                             )}
//                           </ul>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </section>

//         {/* Workshop Guidelines */}
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
//           <div className="container px-4 md:px-6 mx-auto">
//             <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
//               <div className="space-y-6">
//                 <h2 className="text-3xl font-bold text-gray-900">
//                   What to Expect
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900">
//                         Hands-On Learning
//                       </h3>
//                       <p className="text-gray-600">
//                         All workshops include practical, hands-on activities and
//                         real-world applications.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900">
//                         Expert Instruction
//                       </h3>
//                       <p className="text-gray-600">
//                         Learn from experienced scientists, educators, and
//                         community leaders.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900">
//                         All Materials Provided
//                       </h3>
//                       <p className="text-gray-600">
//                         We provide all necessary tools, equipment, and materials
//                         for each workshop.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900">
//                         Community Impact
//                       </h3>
//                       <p className="text-gray-600">
//                         Your participation directly contributes to ongoing
//                         conservation efforts.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Workshop participants"
//                   width={600}
//                   height={400}
//                   className="rounded-lg shadow-lg object-cover w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Newsletter Signup */}
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
//           <div className="container px-4 md:px-6 mx-auto">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
//                 Stay Updated
//               </h2>
//               <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
//                 Subscribe to our newsletter to receive workshop announcements,
//                 registration reminders, and project updates.
//               </p>
//               <div className="flex gap-2 w-full max-w-md">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-2 rounded-md border-0 bg-white/10 text-white placeholder:text-blue-200"
//                 />
//                 <Button
//                   variant="secondary"
//                   className="bg-white text-blue-600 hover:bg-blue-50"
//                 >
//                   Subscribe
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
//         <div className="flex items-center gap-2">
//           <Waves className="h-5 w-5 text-blue-600" />
//           <p className="text-xs text-gray-600">
//             © 2024 RiverWorks Project. All rights reserved.
//           </p>
//         </div>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link
//             href="#"
//             className="text-xs hover:underline underline-offset-4 text-gray-600"
//           >
//             Privacy Policy
//           </Link>
//           <Link
//             href="#"
//             className="text-xs hover:underline underline-offset-4 text-gray-600"
//           >
//             Terms of Service
//           </Link>
//           <Link
//             href="#"
//             className="text-xs hover:underline underline-offset-4 text-gray-600"
//           >
//             Contact
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   );
// }
