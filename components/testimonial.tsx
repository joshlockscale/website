"use client";

import { Badge } from "@/components/ui/badge";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export function Testimonial() {
  return (
    <section className="relative py-20" id="testimonials">
      <div className="container flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">Client Success</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            Hear What Our Clients Are Saying
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          Discover how the team at Lockscale has helped local business owners
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://n7xdln6we883c6um.public.blob.vercel-storage.com/alex-N8GUIpRZZeSLdoZgvKld6JXitoeaVc.jpeg"
                    alt="Alex Patsula"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Alex Patsula</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">★★★★★</p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                "This team has been a game changer. We had to pause out systems due to the high
                volume of jobs we were getting. Just can't recommend them enough!"
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://n7xdln6we883c6um.public.blob.vercel-storage.com/mike-LgLer4ROLb6KZT2HWq0XpaYesXeAFm.jpg"
                    alt="Mike Yat"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Mike Yat</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">★★★★★</p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                "Lockscales team has given us a full 180 on our business and we started getting
                revenue from streams we didn't even think about!"
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://n7xdln6we883c6um.public.blob.vercel-storage.com/varun-9GLoywaS4E4jVZY6tMn8Iwb1UPT3We.jpeg"
                    alt="Varun Passi"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Varun Passi</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">★★★★★</p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                "The guys over at Lockscale have been nothing but excellent, their strengths in
                getting appointments through Google has changed everything for us!"
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://n7xdln6we883c6um.public.blob.vercel-storage.com/mark-SW4E3lYvIEaeeu2xcQ5PanWD3Nm4w2.jpg"
                    alt="Mark Verzyl"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Mark Verzyl </h4>
                  <p className="text-muted-foreground text-base leading-none text-center">★★★★★</p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                "The team over at Lockscale is A class. It's one of the most educated & prepared
                teams I've ever worked with!"
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://n7xdln6we883c6um.public.blob.vercel-storage.com/hedieh-ZIcntDPFolkM016nIkvvS4f4gRvs93.jpeg"
                    alt="Hedieh Jafar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Hedieh Jafar</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">★★★★★</p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                "Extremely professional, does what they say they're going to do, and overall great
                people. It's been a pleasure so far!"
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-7">
              <div className="flex items-center gap-3 flex-col">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://n7xdln6we883c6um.public.blob.vercel-storage.com/terry-WPxhdnATOF7eWRff47ubwXuPCyj5bj.png"
                    alt="Terry Walter"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none text-center">Terry Walter</h4>
                  <p className="text-muted-foreground text-base leading-none text-center">★★★★★</p>
                </div>
              </div>
              <p className="text-base text-center text-foreground">
                "Was a bit skeptical at first, but this has been a pretty awesome partnership from
                the getgo with real results. Bravo guys!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
