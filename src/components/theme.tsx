'use client';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Laptop, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Theme() {
  const { setTheme, theme } = useTheme();

  return (
    <ToggleGroup
      type='single'
      variant='outline'
      size='sm'
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
    >
      <ToggleGroupItem value='system' aria-label='Toggle bold'>
        <Laptop className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='light' aria-label='Toggle italic'>
        <Sun className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='dark' aria-label='Toggle strikethrough'>
        <MoonStar className='h-4 w-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
