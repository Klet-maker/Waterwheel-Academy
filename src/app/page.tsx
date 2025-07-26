import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem, Ruler, Scissors } from 'lucide-react';
import { products } from '@/lib/data';

const values = [
  {
    icon: <Gem className="h-10 w-10 text-accent" />,
    title: 'Affordable Excellence',
    description: 'We believe high-quality fashion education should be accessible to everyone, without the premium price tag.',
  },
  {
    icon: <Ruler className="h-10 w-10 text-accent" />,
    title: 'Timeless Skills',
    description: 'Our curriculum is rooted in classic techniques, ensuring you learn skills that are always in vogue.',
  },
  {
    icon: <Scissors className="h-10 w-10 text-accent" />,
    title: 'Passionate Mentorship',
    description: 'Learn from experienced designers who are eager to share their knowledge and guide you on your creative journey.',
  },
];

const featuredProducts = products.filter(p => p.isFeatured);

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] min-h-[500px] w-full">
        <Image
          src="/hero-image.png"
          alt="Fashion designer's workshop"
          data-ai-hint="fashion workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
          <h1 className="font-headline text-5xl font-bold md:text-7xl">
            Craft Your Future in Fashion
          </h1>
          <p className="font-body mt-4 max-w-2xl text-lg md:text-xl">
            Discover the art of fashion design with our affordable, expert-led tutoring services. Your journey from enthusiast to creator starts here.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/shop">Explore Our Courses</Link>
          </Button>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-4xl font-bold text-primary">Our Values</h2>
            <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
              We are driven by a passion for design and a commitment to our students.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center bg-card border-2 border-transparent hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="items-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    {value.icon}
                  </div>
                  <CardTitle className="font-headline mt-4 text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
                <h2 className="font-headline text-4xl font-bold text-primary">Featured Courses</h2>
                <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                    Get a glimpse of our most popular tutoring packages.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {featuredProducts.map((product) => (
                    <Card key={product.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Link href="/shop" className="group">
                            <div className="relative aspect-video">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    data-ai-hint={product.imageHint}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-headline text-2xl font-bold text-primary">{product.priceFormatted}</p>
                                    <Button variant="link" className="text-accent font-bold group-hover:underline">Learn More &rarr;</Button>
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
             <div className="mt-12 text-center">
                <Button asChild size="lg">
                    <Link href="/shop">View Full Catalogue</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
