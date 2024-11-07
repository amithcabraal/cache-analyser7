export interface NetworkRequest {
  "1.method": string;
  "2.url": string;
  "3.cache-control": string;
  "4.x-cache": string;
  "5.x-amz-cf-pop": string;
  "5.time": number;
  "6.size": number;
  "7.status": number;
  "8.fulfilledBy": string;
  "parsed.cache-control": {
    public: boolean;
    private: boolean;
    "max-age": number | null;
    "s-max-age": number | null;
    "no-cache": boolean;
    "no-store": boolean;
  };
  "parsed.cache-used": string;
}

export interface Filter {
  method?: string;
  urlPattern?: string;
  cacheControl?: string;
  xCache?: string;
  fulfilledBy?: string;
  cacheUsed?: string;
}

export interface PanelConfig {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: 'size-by-cache' | 'requests-by-cache' | 'size-by-pop' | 'requests-by-pop' | 'domain-cache' | 'domain-requests';
}