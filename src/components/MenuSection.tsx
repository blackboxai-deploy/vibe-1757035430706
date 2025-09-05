'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { menuItems, menuCategories } from '@/lib/menu-data';
import { MenuItem } from '@/types/menu';

interface MenuSectionProps {
  showAll?: boolean;
  maxItemsPerCategory?: number;
}

const MenuSection = ({ showAll = false, maxItemsPerCategory = 3 }: MenuSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);

  const getItemsByCategory = (categoryId: string): MenuItem[] => {
    const items = menuItems.filter(item => item.category.id === categoryId);
    return showAll ? items : items.slice(0, maxItemsPerCategory);
  };

  const formatPrice = (price: number) => `${price} MAD`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover authentic Mexican flavors crafted with passion and the finest ingredients. 
            Each dish tells a story of tradition and taste.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-sm md:text-base"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {getItemsByCategory(category.id).map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {item.isPopular && (
                          <Badge className="bg-red-600 text-white">Popular</Badge>
                        )}
                        {item.isSpicy && (
                          <Badge variant="destructive">🌶️ Spicy</Badge>
                        )}
                        {item.isVegetarian && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            🌱 Veggie
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg text-gray-900">
                          {item.name}
                        </h4>
                        <span className="text-lg font-bold text-red-600">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      {item.ingredients && (
                        <div className="text-xs text-gray-500">
                          <strong>Ingredients:</strong> {item.ingredients.join(', ')}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {!showAll && getItemsByCategory(category.id).length >= maxItemsPerCategory && (
                <div className="text-center">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/menu">
                      View Full {category.name} Menu
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {!showAll && (
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/menu">View Complete Menu</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;