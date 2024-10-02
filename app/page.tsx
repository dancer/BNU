"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Twitter, Menu } from "lucide-react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative z-10 bg-white bg-opacity-50 min-h-screen text-black overflow-auto">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        onLoadedData={handleVideoLoad}
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
      >
        <source src="/4k.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 bg-white bg-opacity-50 min-h-screen text-black">
        <header className="p-8">
          <nav className="flex justify-between items-center relative">
            <span className="text-sm font-medium">BNU ESPORTS</span>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <div className={`md:flex md:space-x-4 ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
              <Link href="https://www.bucks.ac.uk/about-us" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline block md:inline mb-2 md:mb-0">
                ABOUT
              </Link>
              <Link href="https://www.bucksstudentsunion.org/whatson/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline block md:inline mb-2 md:mb-0">
                EVENTS
              </Link>
              <Link href="https://www.bucks.ac.uk/about-us/contact-us" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline block md:inline">
                CONTACT
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-8">
          <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-6xl font-bold mb-4">
                BNU
                <br />
                ESPORTS.
              </h1>
              <p className="text-sm font-medium mb-4">
                Welcome to BNU Esports! We believe in setting clear expectations
                and maintaining a sense of community right from the start.
              </p>
              <Button
                variant="outline"
                className="text-black border-black hover:bg-black hover:text-white"
                asChild
              >
                <Link
                  href="https://discord.gg/FX5BurG8Zh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our Discord
                </Link>
              </Button>
            </div>
            <div className="relative h-40">
              <Image
                src="/esport.png"
                alt="BNU Esports team"
                layout="fit"
                height={300}
                width={300}
                objectFit="cover"
              />
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">THE BASICS</h2>
            <p className="text-sm font-medium mb-4">
              Welcome to BNU Esports! Here, we believe in setting clear
              expectations and maintaining a sense of community right from the
              start. Our team, the committee, works hard to ensure everyone has
              the tools and support needed to succeed both in-game and within
              the wider esports culture at BNU.
            </p>
            <p className="text-sm font-medium mb-4">
              Throughout the year, you'll be introduced to various aspects of
              BNU Esports, including game day expectations, training sessions,
              volunteering opportunities, and more. Our plans include exciting
              events like Varsity, Union Awards, and the AU Dinner, all of which
              you'll hear about in more detail soon.
            </p>
            <p className="text-sm font-medium">
              Remember, active participation in BNU's esports community is key
              to unlocking your potential and having a memorable year!
            </p>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">MEET THE COMMITTEE</h2>
            <p className="text-sm font-medium mb-4">
              Our committee is a dedicated group of individuals who keep the BNU
              Esports society running smoothly. From organizing events to
              managing day-to-day operations, each member plays a critical role.
              Here, you'll get to know each committee member, their roles, and
              what they are most excited about this year. Expect fun facts and
              light-hearted stories to keep things casual!
            </p>
            <p className="text-sm font-medium">
              We also make sure to have a certified first aider available at all
              times—this is a requirement for every team and society at BNU
              Esports.
            </p>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">WHO IS THE SU?</h2>
            <p className="text-sm font-medium mb-4">
              The Student Union (SU) is the backbone of student activities,
              including BNU Esports. They manage everything from funding to the
              welfare of student groups, ensuring that every society has what it
              needs to thrive. At BNU, we encourage all esports society members
              to stay connected with the SU through their social media
              channels—Instagram, Facebook, and more—so you're always in the
              loop on important news, events, and campaigns.
            </p>
            <p className="text-sm font-medium">
              Additionally, key SU staff who are relevant to our esports
              activities will be introduced so you know who to reach out to for
              support.
            </p>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              EXPECTATIONS & GUIDELINES
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What The Committee Expects From Members
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-medium">
                    Being part of BNU Esports is a privilege that comes with a
                    few important expectations. Members are encouraged to
                    contribute by volunteering, logging hours, and supporting
                    fundraising efforts like RAG (Raise and Give). Your
                    participation in both Union and AU (Athletic Union) Councils
                    is also important, as these meetings shape the direction of
                    all student societies, not just esports. We ask all members
                    to communicate effectively, stay committed to training, game
                    days, and show up for other societies' events as well.
                    Respect, energy, and enthusiasm are key traits we expect,
                    both on and off the virtual battlefield.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Training/Session Expectations
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-medium">
                    When it comes to training and gaming sessions, punctuality
                    and preparation are essential. We expect all members to
                    respect the committee's guidance, show up on time, and bring
                    the necessary equipment. Commitment to improvement and
                    teamwork is a vital part of what makes BNU Esports a
                    success. Whether it's for regular practice sessions or
                    competitive play, members should arrive ready to engage and
                    put in their best effort.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Game Day Expectations</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-medium">
                    Game days are the highlight of BNU Esports! We expect all
                    members to arrive early, bring their equipment, and come
                    prepared with the right mindset. Respect towards opponents,
                    officials, and committee members is paramount, as we aim to
                    maintain a positive and sportsmanlike environment. Make sure
                    you're familiar with the BUCS Play app as it's essential for
                    staying updated on our matches and schedules.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">GET INVOLVED</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Volunteering</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-medium">
                    Volunteering is an important part of being a BNU Esports
                    member. It not only helps us achieve our accreditation but
                    also offers valuable opportunities for personal growth and
                    community engagement. We categorize volunteering into three
                    types: Internal, Community, and Green
                    (environmentally-focused). Whether it's helping at events or
                    logging your hours on-site, we encourage everyone to give
                    back. And don't worry, we'll show you how to log your hours
                    right at the welcome meeting.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>MIDAS</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-medium">
                    For those of you aged 21 and over who have held a UK
                    driver's license for at least two years, you have the
                    opportunity to take the MIDAS mini-bus driving test. This is
                    a great way to contribute to BNU Esports, as having more
                    qualified drivers makes event transportation easier. Plus,
                    volunteering hours are given for completing the test!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>RAG (Raise and Give)</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm font-medium">
                    RAG stands for Raise and Give, and it's one of the most
                    exciting ways to get involved in charity work while being
                    part of BNU Esports. Each year, the SU selects a charity
                    that we fundraise for, but societies and clubs can also
                    choose their own cause. Deciding on which charity to support
                    is a collaborative effort within the society, and you'll be
                    notified of our charity of choice soon. Fundraising is also
                    a core part of our accreditation, so all members are
                    encouraged to participate in these efforts.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">STASH</h2>
            <p className="text-sm font-medium">
              Esports merchandise, or "stash," is a great way to represent the
              BNU Esports community. We'll share photos of our latest designs
              and set a deadline for payments—typically one week before the
              official deadline to ensure everyone gets their stash on time.
              While it's not compulsory, wearing our stash at events, matches,
              or casually is a great way to show your team spirit. And when you
              make a payment, don't forget to include your initials and the name
              of the society to avoid any mix-ups!
            </p>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">PLANS FOR THE YEAR</h2>
            <p className="text-sm font-medium mb-4">
              We have ambitious plans for the year ahead! From tournaments and
              scrimmages to social events and charity fundraisers, there will be
              plenty to keep you engaged. The committee has set specific
              accreditation targets for the year, and we'll be working together
              to achieve these as a team. Throughout the year, we'll also keep
              you updated on how we're progressing towards our goals, so stay
              tuned!
            </p>
            <h3 className="text-xl font-semibold mb-4">All The Councils</h3>
            <p className="text-sm font-medium mb-4">
              It's not just about gaming! BNU Esports members are encouraged to
              participate in various councils throughout the year. Union
              Council, AU Council, and Society Council all play an essential
              role in the governance of student activities. These councils meet
              four times a year, and while it's mandatory for the committee to
              attend, we highly encourage members to join as well. Your input
              helps shape the future of our society.
            </p>
            <h3 className="text-xl font-semibold mb-4">Varsity!</h3>
            <p className="text-sm font-medium mb-4">
              Varsity is one of the most important events in the BNU Athletic
              Union's calendar, and we want everyone in BNU Esports to get
              involved. Even though it's typically associated with physical
              sports, esports is becoming an increasingly prominent part of
              Varsity. Whether you're competing or supporting, the event is not
              to be missed. This year's Varsity will be held on the 12th of
              March 2025.
            </p>
            <h3 className="text-xl font-semibold mb-4">
              Union Awards and AU Dinner
            </h3>
            <p className="text-sm font-medium mb-4">
              As the year progresses, we'll be looking ahead to the Union Awards
              and AU Dinner. These events celebrate the hard work and
              achievements of societies, and BNU Esports will be no exception!
              We encourage all members to think about nominations for awards
              such as Club or Society of the Year. The AU Dinner is a highlight,
              and we hope to see you all there on the 16th of April 2025.
            </p>
            <h3 className="text-xl font-semibold mb-4">Elections</h3>
            <p className="text-sm font-medium mb-4">
              Elections for the next committee will open in January. We
              encourage everyone to start thinking early about whether a
              leadership role is something you might want to pursue. Serving on
              the committee is a rewarding experience and a great way to give
              back to the BNU Esports community. If you think you have what it
              takes, don't hesitate to step up!
            </p>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">ANNUAL TOUR</h2>
            <p className="text-sm font-medium mb-4">
              One of the most exciting aspects of BNU Esports is our annual
              tour, where we travel as a group for a week of gaming, fun, and
              bonding. It's an opportunity to strengthen friendships, create
              lasting memories, and immerse yourself in the world of esports
              beyond our university.
            </p>
            <Tabs defaultValue="dates" className="w-full">
              <TabsList>
                <TabsTrigger value="dates">Dates</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="preparation">Preparation</TabsTrigger>
              </TabsList>
      <TabsContent value="dates">
          <Card>
            <CardHeader>
              <CardTitle>Tour Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Croatia - Porec</h3>
              <ul className="list-disc list-inside text-sm font-medium mb-4">
                <li>5th-11th April</li>
                <li>12th-18th April</li>
                <li>21st-27th April</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Spain - Salou</h3>
              <ul className="list-disc list-inside text-sm font-medium mb-4">
                <li>11th - 15th June</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
              <TabsContent value="activities">
                <Card>
                  <CardHeader>
                    <CardTitle>Tour Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-sm font-medium">
                      <li>Sightseeing around the country!</li>
                      <li>Visit popular areas!</li>
                      <li>Team-building exercises</li>
                      <li>Attend social events for students!</li>
                      <li>And much more!</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="preparation">
                <Card>
                  <CardHeader>
                    <CardTitle>How to Prepare</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside text-sm font-medium">
                      <li>
                        Ensure your passport is valid (if traveling abroad)
                      </li>
                      <li>Budget for personal expenses</li>
                      <li>Pack appropriate clothing and gaming gear</li>
                      <li>Attend pre-tour meetings</li>
                      <li>Get to know your fellow travelers</li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              SOCIAL SCHEDULE FOR TERM 1
            </h2>
            <p className="text-sm font-medium">
              Our social events for Term 1 are packed with fun! We'll be hosting
              a variety of themed events, each with its own costume requirements
              and unique flair. However, we're mindful of the cost-of-living
              crisis, so we'll be working hard to keep costs manageable for
              everyone. Keep an eye out for announcements about our social
              schedule, as it's a great way to bond with fellow members!
            </p>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">EVENTS</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Varsity</span>
                <span className="text-sm font-medium">12 MARCH 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">AU Dinner</span>
                <span className="text-sm font-medium">16 APRIL 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Annual Tour</span>
                <span className="text-sm font-medium">5-11 APRIL 2025</span>
              </div>
            </div>
          </section>
        </main>

        <footer className="p-8 flex justify-between items-center">
          <p className="text-sm font-medium">
            made by{" "}
            <Link
              href="https://x.com/dxd"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              dxd_
            </Link>{" "}
            &{" "}
            <Link
              href="https://linktr.ee/benza._._"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              zaza_
            </Link>
          </p>
          <Link
            href="https://x.com/_bnuni?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 text-black" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
