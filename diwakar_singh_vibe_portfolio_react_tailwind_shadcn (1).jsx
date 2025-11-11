import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowRight, Moon, Sun, Send, ExternalLink } from "lucide-react";

// ----- DATA -----
const DATA = {
  name: "DIWAKAR SINGH",
  title: "BCA Cyber Security Student · Digital Marketing & SMM",
  phone: "+91 8887667044",
  email: "merivenom@gmail.com",
  location: "Jaipur, India",
  objective:
    "Motivated and detail-oriented BCA Cyber Security student passionate about technology, digital marketing, and online security. Skilled in content creation, social media management, and problem-solving, with a strong desire to grow in the tech and cybersecurity field.",
  experience: [
    {
      role: "Social Media Manager & Digital Marketer (Freelance)",
      org: "Self-employed",
      start: "Jan 2023",
      end: "Present",
      location: "Remote / Jaipur",
      bullets: [
        "Handled multiple client projects involving content creation, brand management, and engagement strategies.",
        "Developed and maintained online presence for small businesses and personal brands.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (Cyber Security)",
      school: "Apex University",
      location: "Jaipur",
      start: "2024",
      end: "Expected 2028",
    },
    {
      degree: "12th (Intermediate)",
      school: "Lalu Prasad Inter College",
      location: "Kanpur",
      start: "2023",
      end: "2023",
    },
    {
      degree: "Diploma in Computer Applications (DCA)",
      school: "X Zone",
      location: "Kanpur",
      start: "2023",
      end: "2023",
    },
  ],
  skills: [
    "Cybersecurity fundamentals",
    "Ethical hacking basics",
    "Digital marketing strategies",
    "Social media management",
    "Content creation & writing",
    "Graphic design tools",
    "Microsoft Office",
    "Portfolio management",
    "Marketing strategy",
    "Communication & collaboration",
    "Problem solving & time management",
    "Freelance negotiation",
    "Industry insights",
  ],
  languages: ["English", "Hindi"],
  interests: [
    "Cybersecurity Research",
    "Ethical Hacking",
    "Digital Marketing Trends",
    "Technology Exploration",
    "Photography",
  ],
  socials: [
    // Add your actual links later
    { label: "GitHub", icon: Github, href: "#" },
    { label: "LinkedIn", icon: Linkedin, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
  ],
  projects: [
    {
      title: "Client Brand Growth (Case Study)",
      blurb:
        "Increased engagement by designing a content calendar, optimizing reels, and running targeted promos.",
      tags: ["SMM", "Reels", "Branding"],
      href: "#",
    },
    {
      title: "Basic Phishing Awareness Site",
      blurb:
        "A simple awareness microsite explaining phishing red flags for non-technical users.",
      tags: ["Security", "Education"],
      href: "#",
    },
  ],
};

// ----- HELPERS -----
function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-end gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <span className="text-sm text-muted-foreground">{subtitle}</span>
        )}
      </div>
      {children}
    </section>
  );
}

function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.5), transparent 60%), radial-gradient(closest-side, rgba(236,72,153,0.35), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.4 }}
        className="absolute bottom-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,197,94,0.4), transparent 60%)",
        }}
      />
    </div>
  );
}

function Pill({ children }) {
  return (
    <Badge className="rounded-full px-3 py-1 text-xs font-medium" variant="secondary">
      {children}
    </Badge>
  );
}

function TimelineItem({ item }) {
  return (
    <Card className="border-muted/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base sm:text-lg flex flex-wrap items-center gap-2">
          <span>{item.role || item.degree}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{item.org || item.school}</span>
        </CardTitle>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <span>{item.location}</span>
          <span>•</span>
          <span>
            {item.start} – {item.end}
          </span>
        </div>
      </CardHeader>
      {item.bullets && (
        <CardContent className="pt-0">
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Someone"}`);
    const body = encodeURIComponent(message);
    return `mailto:${DATA.email}?subject=${subject}&body=${body}`;
  }, [name, message]);

  return (
    <Card className="border-muted/50">
      <CardHeader>
        <CardTitle>Quick Contact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <Textarea rows={4} placeholder="Say hello…" value={message} onChange={(e) => setMessage(e.target.value)} />
        <div className="flex items-center gap-2">
          <Button asChild>
            <a href={mailto}>
              <Send className="h-4 w-4 mr-2" /> Send
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href={`tel:${DATA.phone.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4 mr-2" /> Call
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DiwakarPortfolio() {
  const [dark, setDark] = useState(true);
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (dark) el.classList.add("dark");
    else el.classList.remove("dark");
  }, [dark]);

  return (
    <div ref={rootRef} className="min-h-screen font-sans antialiased">
      <div className="relative bg-background text-foreground transition-colors duration-300 dark:bg-black dark:text-white">
        <GradientBackdrop />

        {/* NAVBAR */}
        <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">diwakar.dev</a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#about" className="hover:opacity-80">About</a>
              <a href="#experience" className="hover:opacity-80">Experience</a>
              <a href="#education" className="hover:opacity-80">Education</a>
              <a href="#skills" className="hover:opacity-80">Skills</a>
              <a href="#projects" className="hover:opacity-80">Projects</a>
              <a href="#contact" className="hover:opacity-80">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setDark((d) => !d)}>
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild>
                <a href={`mailto:${DATA.email}`}>Hire Me</a>
              </Button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <main id="home" className="mx-auto max-w-6xl px-4">
          <section className="pt-16 sm:pt-24 pb-12">
            <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
              <div>
                <motion.h1
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-5xl font-bold leading-tight"
                >
                  {DATA.name}
                </motion.h1>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="mt-3 text-lg text-muted-foreground"
                >
                  {DATA.title}
                </motion.p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                  <Badge variant="outline" className="gap-2"><MapPin className="h-3.5 w-3.5" /> {DATA.location}</Badge>
                  <a href={`tel:${DATA.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2">
                    <Button variant="secondary" size="sm"><Phone className="h-4 w-4" /> {DATA.phone}</Button>
                  </a>
                  <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2">
                    <Button size="sm"><Mail className="h-4 w-4" /> {DATA.email}</Button>
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {DATA.socials.map((s, i) => (
                    <Button key={i} asChild variant="outline" size="icon">
                      <a href={s.href} aria-label={s.label}>
                        <s.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <Button asChild>
                    <a href="#projects">See Projects <ArrowRight className="h-4 w-4 ml-2" /></a>
                  </Button>
                  <Button asChild variant="ghost">
                    <a href="#about">Learn more</a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Card className="border-muted/50">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">{DATA.objective}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <Section id="about" title="About">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle>Career Objective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{DATA.objective}</p>
                </CardContent>
              </Card>

              <ContactForm />
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section id="experience" title="Experience">
            <div className="grid gap-4">
              {DATA.experience.map((ex, i) => (
                <TimelineItem item={ex} key={i} />
              ))}
            </div>
          </Section>

          {/* EDUCATION */}
          <Section id="education" title="Education">
            <div className="grid md:grid-cols-2 gap-4">
              {DATA.education.map((ed, i) => (
                <TimelineItem item={ed} key={i} />
              ))}
            </div>
          </Section>

          {/* SKILLS */}
          <Section id="skills" title="Skills">
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((s, i) => (
                <Pill key={i}>{s}</Pill>
              ))}
            </div>
          </Section>

          {/* PROJECTS */}
          <Section id="projects" title="Projects" subtitle="A few things I've worked on / can showcase">
            <div className="grid md:grid-cols-2 gap-4">
              {DATA.projects.map((p, i) => (
                <Card key={i} className="border-muted/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{p.blurb}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t, j) => (
                        <Pill key={j}>{t}</Pill>
                      ))}
                    </div>
                    <Button asChild variant="secondary" size="sm" className="mt-2 w-fit">
                      <a href={p.href}>
                        View <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {/* Placeholder card for adding more */}
              <Card className="border-dashed">
                <CardContent className="p-6 text-sm text-muted-foreground">
                  Want me to add more projects? Share links, screenshots, or brief summaries and I'll slot them in.
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* LANGUAGES & INTERESTS */}
          <Section id="extras" title="Languages & Interests">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle>Languages Known</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {DATA.languages.map((l, i) => (
                    <Pill key={i}>{l}</Pill>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle>Interests</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {DATA.interests.map((it, i) => (
                    <Pill key={i}>{it}</Pill>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Section>

          {/* CONTACT */}
          <Section id="contact" title="Contact">
            <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-6 items-start">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle>Let's Collaborate</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I’m open to freelance engagements, internships, and collaborations in cyber security, social media, and digital marketing.
                  </p>
                  <p>
                    Reach out via email or phone, or drop a quick note using the form.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="secondary">
                      <a href={`mailto:${DATA.email}`}><Mail className="h-4 w-4 mr-2" /> Email</a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={`tel:${DATA.phone.replace(/\s/g, "")}`}><Phone className="h-4 w-4 mr-2" /> Call</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <ContactForm />
            </div>
          </Section>
        </main>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {DATA.socials.map((s, i) => (
                <a key={i} href={s.href} className="hover:opacity-80 inline-flex items-center gap-1">
                  <s.icon className="h-4 w-4" /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
