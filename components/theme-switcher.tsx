'use client';

import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const themes = [
    {
        key: 'light',
        icon: Sun,
        label: 'Light theme',
    },
    {
        key: 'dark',
        icon: Moon,
        label: 'Dark theme',
    },
];

type TThemeSwitcherProps = {
    value?: 'light' | 'dark';
    onChange?: (theme: 'light' | 'dark') => void;
    defaultValue?: 'light' | 'dark';
    className?: string;
};

const emptySubscribe = () => () => {};

export const ThemeSwitcher = ({
    value,
    onChange,
    defaultValue = 'dark',
    className,
}: TThemeSwitcherProps) => {
    const { theme: currentTheme, setTheme } = useTheme();
    const [theme, setInternalTheme] = useControllableState({
        defaultProp: defaultValue,
        prop: value || (currentTheme as 'light' | 'dark'),
        onChange: (newTheme) => {
            setTheme(newTheme);
            onChange?.(newTheme);
        },
    });
    
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );

    const handleThemeClick = useCallback(
        (themeKey: 'light' | 'dark') => {
            setInternalTheme(themeKey);
        },
        [setInternalTheme]
    );

    if (!mounted) {
        return (
            <div
                className={cn(
                    'relative isolate flex h-8 rounded-full bg-muted/50 p-1 ring-1 ring-black/5 dark:ring-white/10',
                    className
                )}
            >
                <div className="h-6 w-6" />
                <div className="h-6 w-6" />
            </div>
        );
    }

    return (
        <div
            className={cn(
                'relative isolate flex h-8 rounded-full bg-muted/50 p-1 ring-1 ring-black/5 dark:ring-white/10',
                className
            )}
        >
            {themes.map(({ key, icon: Icon, label }) => {
                const isActive = theme === key;
                return (
                    <button
                        aria-label={label}
                        className="relative h-6 w-6 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                        key={key}
                        onClick={() => handleThemeClick(key as 'light' | 'dark')}
                        type="button"
                    >
                        {isActive && (
                            <motion.div
                                className="absolute inset-0 rounded-full bg-background ring-1 ring-black/5 dark:ring-white/10"
                                layoutId="activeTheme"
                                transition={{ type: 'spring', duration: 0.5 }}
                            />
                        )}
                        <Icon
                            className={cn(
                                'relative z-10 m-auto size-4 shrink-0',
                                isActive ? 'text-foreground' : 'text-muted-foreground'
                            )}
                        />
                    </button>
                );
            })}
        </div>
    );
};
