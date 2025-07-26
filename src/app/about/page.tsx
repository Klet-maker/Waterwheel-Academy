import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-5xl font-bold text-primary">About Waterwheel Academy</h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
            We are dedicated to making the world of fashion design accessible through affordable, old-fashioned, high-quality tutoring.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5]">
            <Image
              src="/hero-image.png"
              alt="Vintage sewing machine"
              data-ai-hint="vintage sewing"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="mb-6 text-lg text-foreground/90">
              Founded on the principle that creativity knows no budget, Super Waterwheel was born from a desire to share the timeless craft of fashion design with a new generation of creators. We noticed that many aspiring designers were held back by the high cost of traditional fashion schools. Our mission became clear: to provide an alternative that was both affordable and rich in the classic traditions of the art form.
            </p>
            <p className="text-lg text-foreground/90">
              We embrace an "old-fashioned" approach, focusing on the fundamental skills of sketching, sewing, and pattern-making that have been the bedrock of couture for centuries. This focus on craftsmanship, combined with our passion for teaching, creates a unique and eager learning environment for all our adult students.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            To be the most trusted and accessible resource for learning the art of fashion design, empowering adults everywhere to turn their creative visions into tangible, beautiful realities. We strive to cultivate a community where eagerness to learn is met with expert guidance and unwavering support.
          </p>
        </div>
      </div>
    </div>
  );
}
