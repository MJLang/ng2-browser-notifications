interface NotificationOptions {
    dir?: string;
    lang?: string;
    body?: string;
    tag?: string;
    icon?: string;
    data?: any;
    vibrate?: number[];
    renotify?: boolean;
    silent?: boolean;
    sound?: string;
    noscreen?: boolean;
    sticky?: boolean;
}

interface Notification {
    readonly title: string;
    readonly dir: string;
    readonly lang: string;
    readonly body: string;
    readonly tag: string;
    readonly icon: string;
    readonly data: any;
    readonly silent: boolean;
    readonly timestamp: string;
    readonly noscreen: boolean;
    readonly renotify: boolean;
    readonly sound: string;
    readonly sticky: boolean;
    readonly vibrate: number[];
    onclick: Function;
    onerror: Function;
    close(): void;
}

declare var Notification: {
    prototype: Notification;
    readonly permission: string;
    new(title: string, options?: NotificationOptions): Notification;
    requestPermission(): Promise<string>;

}

