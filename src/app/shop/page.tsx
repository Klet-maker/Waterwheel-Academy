import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/data';

export default function ShopPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-headline text-5xl font-bold text-primary">Our Courses Catalogue</h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
            Invest in your passion. Each course is designed to provide you with timeless skills at an unbeatable price.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="relative aspect-video">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  data-ai-hint={product.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-grow flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col">
                  <p className="flex-grow text-muted-foreground mb-4">{product.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <p className="font-headline text-3xl font-bold text-primary">{product.priceFormatted}</p>
                    <Button>Enroll Now</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
