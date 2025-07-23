import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Laptop, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Theme() {
  const { setTheme, theme } = useTheme();
  const [toggleGroupValue, setToggleGroupValue] = useState<string>('system'); // workaround from the react hydration error

  useEffect(() => {
    setToggleGroupValue(theme);
  }, [theme]);

  return (
    <ToggleGroup
      type='single'
      variant='outline'
      size='sm'
      value={toggleGroupValue}
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
