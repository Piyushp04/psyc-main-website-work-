
export type VideoData = {
  url: string;
  title: string;
  available?: boolean;
  videoId?: string;
};

// Helper function to extract YouTube video ID from URL
export const extractVideoId = (url: string): string => {
  if (!url) return '';
  
  // Handle youtu.be format
  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1]?.split('?')[0] || '';
  }
  
  // Handle youtube.com/watch format
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    return urlParams.get('v') || '';
  }
  
  // Handle youtu.be format
  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1]?.split('?')[0] || '';
  }
  
  return '';
};

export const problemVideos = {
  india: {
    karnataka: [
      { url: 'https://youtu.be/t5E7Kii98uo', title: 'Human-Elephant Conflicts in Karnataka - Case 1' },
      { url: 'https://youtu.be/QEpckTci8eg', title: 'Human-Elephant Conflicts in Karnataka - Case 2' },
      { url: 'https://youtu.be/0BWcYxKE_FQ', title: 'Human-Elephant Conflicts in Karnataka - Case 3' }
    ],
    kerala: [
      { url: 'https://youtu.be/Nu330qWqDvY', title: 'Human-Elephant Conflicts in Kerala - Case 1' },
      { url: 'https://youtu.be/fSqDGqeInoc', title: 'Human-Elephant Conflicts in Kerala - Case 2' },
      { url: 'https://youtu.be/D8QRcrdNoQk', title: 'Human-Elephant Conflicts in Kerala - Case 3' }
    ],
    assam: [
      { url: 'https://youtu.be/2vKKqoolyJ8', title: 'Human-Elephant Conflicts in Assam - Case 1' },
      { url: 'https://youtu.be/ILKhR5GDn8U', title: 'Human-Elephant Conflicts in Assam - Case 2' }
    ],
    maharashtra: [
      { url: 'https://youtu.be/fJh4gFke84M', title: 'Human-Elephant Conflicts in Maharashtra - Case 1' },
      { url: 'https://youtu.be/FJC0rLl1eek', title: 'Human-Elephant Conflicts in Maharashtra - Case 2' },
      { url: 'https://youtu.be/bKRjEp0DCWo', title: 'Human-Elephant Conflicts in Maharashtra - Case 3' }
    ],
    madhyaPradesh: [
      { url: 'https://youtu.be/CgCgnp2epq0', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 1' },
      { url: 'https://youtu.be/6cHJrfqzczc', title: 'Human-Elephant Conflicts in Madhya Pradesh - Case 2' }
    ],
    odisha: [
      { url: 'https://youtu.be/zzqYRdo_SNY', title: 'Human-Elephant Conflicts in Odisha - Case 1' },
      { url: '', title: 'Human-Elephant Conflicts in Odisha - Case 2', available: false },
      { url: '', title: 'Human-Elephant Conflicts in Odisha - Case 3', available: false }
    ],
    uttarakhand: [
      { url: 'https://youtu.be/ZCFVDjFhNuY', title: 'Human-Elephant Conflicts in Uttarakhand - Case 1' },
      { url: 'https://youtu.be/dwJHIQhVCAs', title: 'Human-Elephant Conflicts in Uttarakhand - Case 2' },
      { url: 'https://youtu.be/cLfEDMoUgYg', title: 'Human-Elephant Conflicts in Uttarakhand - Case 3' }
    ],
    telangana: [
      { url: 'https://youtu.be/dcNvtzTs9l4', title: 'Human-Elephant Conflicts in Telangana - Case 1' },
      { url: 'https://youtu.be/uHkhs7ydGGg', title: 'Human-Elephant Conflicts in Telangana - Case 2' },
      { url: 'https://youtu.be/a4jgDIFiET8', title: 'Human-Elephant Conflicts in Telangana - Case 3' }
    ],
    westBengal: [
      { url: 'https://youtu.be/4OQ_94ZxNdc', title: 'Human-Elephant Conflicts in West Bengal - Case 1' },
      { url: 'https://youtu.be/2YDJM-vLU5I', title: 'Human-Elephant Conflicts in West Bengal - Case 2' },
      { url: 'https://youtu.be/EO5eR9VRiLw', title: 'Human-Elephant Conflicts in West Bengal - Case 3' }
    ],
    uttarPradesh: [
      { url: 'https://youtu.be/E6LL1hAcoPk', title: 'Human-Elephant Conflicts in Uttar Pradesh - Case 1' },
      { url: 'https://youtu.be/NlJEhsU56-E', title: 'Human-Elephant Conflicts in Uttar Pradesh - Case 2' },
      { url: 'https://youtu.be/x3j0RCKPBY4', title: 'Human-Elephant Conflicts in Uttar Pradesh - Case 3' }
    ],
    gujarat: [
      { url: 'https://youtu.be/1gCdt0aVTbE', title: 'Human-Elephant Conflicts in Gujarat - Case 1' },
      { url: 'https://youtu.be/vx_5RxVoTLw', title: 'Human-Elephant Conflicts in Gujarat - Case 2' },
      { url: 'https://youtu.be/toet9SaLs_', title: 'Human-Elephant Conflicts in Gujarat - Case 3' }
    ]
  },
  china: [
    { url: 'https://youtu.be/HE69a4j1deo', title: 'Human-Elephant Conflicts in China' },
    { url: 'https://youtu.be/example1', title: 'Human-Elephant Conflicts in China - Case 2' },
    { url: 'https://youtu.be/example2', title: 'Human-Elephant Conflicts in China - Case 3' }
  ],
  sriLanka: [
    { url: 'https://youtu.be/example3', title: 'Human-Elephant Conflicts in Sri Lanka - Case 1' },
    { url: 'https://youtu.be/example4', title: 'Human-Elephant Conflicts in Sri Lanka - Case 2' },
    { url: 'https://youtu.be/example5', title: 'Human-Elephant Conflicts in Sri Lanka - Case 3' }
  ],
  thailand: [
    { url: 'https://youtu.be/example6', title: 'Human-Elephant Conflicts in Thailand - Case 1' },
    { url: 'https://youtu.be/example7', title: 'Human-Elephant Conflicts in Thailand - Case 2' },
    { url: 'https://youtu.be/example8', title: 'Human-Elephant Conflicts in Thailand - Case 3' }
  ],
  nepal: [
    { url: 'https://youtu.be/2pGfxcZZNfE', title: 'Human-Elephant Conflicts in Nepal - Case 1' },
    { url: 'https://youtu.be/AQ3yDuRdzxU', title: 'Human-Elephant Conflicts in Nepal - Case 2' },
    { url: 'https://youtu.be/NRaTPTijHTA', title: 'Human-Elephant Conflicts in Nepal - Case 3' }
  ],
  bhutan: [
    { url: 'https://youtu.be/HxI1vieMFzQ', title: 'Human-Elephant Conflicts in Bhutan - Case 1' },
    { url: 'https://youtu.be/YRv-dVy_Pnw', title: 'Human-Elephant Conflicts in Bhutan - Case 2' },
    { url: 'https://youtu.be/Eono78jNrlo', title: 'Human-Elephant Conflicts in Bhutan - Case 3' }
  ]
};

export const africaVideos: VideoData[] = [
  { url: 'https://youtu.be/6GmTSgxhnq0', title: 'Human-Elephant Conflicts in Africa' },
  { url: 'https://youtu.be/O4iKbZ5o88A', title: 'Human-Elephant Conflicts in Zimbabwe' }
];

export const solutionsVideos: VideoData[] = [
  { url: 'https://youtu.be/Wm0KnZDzM_g', title: 'Elephant-Wildlife Conflicts Management in India' },
  { url: 'https://youtu.be/KVgMLFPC_dA', title: 'Wildlife Conflict Solutions - India' },
  { url: 'https://youtu.be/LFisjTl-Qnc', title: 'Elephant-Wildlife Conflicts in Africa - Solutions' },
  { url: 'https://youtu.be/okYUGy0NmGY', title: 'African Wildlife Management Approaches' }
];

// Leopard Conflict Videos
export const leopardProblemVideos = {
  india: {
    maharashtra: [
      { url: 'https://www.youtube.com/watch?v=Gz_qy9d0ayM', title: 'Human-Leopard Conflicts in Maharashtra - Case 1' },
      { url: 'https://www.youtube.com/watch?v=9J1mxdXS1Ts', title: 'Human-Leopard Conflicts in Maharashtra - Case 2' },
      { url: 'https://www.youtube.com/watch?v=Z13POxSTmZ8', title: 'Human-Leopard Conflicts in Maharashtra - Case 3' }
    ],
    madhyaPradesh: [
      { url: 'https://www.youtube.com/watch?v=34vctKV-6uE', title: 'Human-Leopard Conflicts in Madhya Pradesh - Case 1' },
      { url: 'https://www.youtube.com/watch?v=Gz_qy9d0ayM', title: 'Human-Leopard Conflicts in Madhya Pradesh - Case 2' },
      { url: 'https://www.youtube.com/watch?v=9J1mxdXS1Ts', title: 'Human-Leopard Conflicts in Madhya Pradesh - Case 3' }
    ],
    uttarakhand: [
      { url: 'https://www.youtube.com/watch?v=8odDc-zJ97A', title: 'Human-Leopard Conflicts in Uttarakhand - Case 1' },
      { url: 'https://www.youtube.com/watch?v=rRVY3qphXGM', title: 'Human-Leopard Conflicts in Uttarakhand - Case 2' },
      { url: 'https://www.youtube.com/watch?v=MGh76cUww0c', title: 'Human-Leopard Conflicts in Uttarakhand - Case 3' }
    ],
    gujarat: [
      { url: 'https://www.youtube.com/watch?v=p5LHwkS_oiM', title: 'Human-Leopard Conflicts in Gujarat - Case 1' },
      { url: 'https://www.youtube.com/watch?v=_OLueEFcs1I', title: 'Human-Leopard Conflicts in Gujarat - Case 2' },
      { url: 'https://www.youtube.com/watch?v=dcNvtzTs9l4', title: 'Human-Leopard Conflicts in Gujarat - Case 3' }
    ],
    rajasthan: [
      { url: 'https://www.youtube.com/watch?v=OTKTEzz8Pd0', title: 'Human-Leopard Conflicts in Rajasthan - Case 1' },
      { url: 'https://www.youtube.com/watch?v=tGXVFqP9Kw8', title: 'Human-Leopard Conflicts in Rajasthan - Case 2' },
      { url: 'https://www.youtube.com/watch?v=kxutg7hV1xo', title: 'Human-Leopard Conflicts in Rajasthan - Case 3' }
    ],
    himachalPradesh: [
      { url: 'https://www.youtube.com/watch?v=Dtkuu1vOOrA', title: 'Human-Leopard Conflicts in Himachal Pradesh - Case 1' },
      { url: 'https://www.youtube.com/watch?v=oTADGvDlT3I', title: 'Human-Leopard Conflicts in Himachal Pradesh - Case 2' },
      { url: 'https://www.youtube.com/watch?v=EceE_yHqnk8', title: 'Human-Leopard Conflicts in Himachal Pradesh - Case 3' }
    ],
    karnataka: [
      { url: 'https://www.youtube.com/watch?v=PkIBUqqDwk8', title: 'Human-Leopard Conflicts in Karnataka - Case 1' },
      { url: 'https://www.youtube.com/watch?v=USZEZaRyU4Y', title: 'Human-Leopard Conflicts in Karnataka - Case 2' },
      { url: 'https://www.youtube.com/watch?v=jbqn_ThRo20', title: 'Human-Leopard Conflicts in Karnataka - Case 3' }
    ],
    kerala: [
      { url: 'https://www.youtube.com/watch?v=FjH54l7isLk', title: 'Human-Leopard Conflicts in Kerala - Case 1' },
      { url: 'https://www.youtube.com/watch?v=YE36h206Fh4', title: 'Human-Leopard Conflicts in Kerala - Case 2' },
      { url: 'https://www.youtube.com/watch?v=dcNvtzTs9l4', title: 'Human-Leopard Conflicts in Kerala - Case 3' }
    ],
    westBengal: [
      { url: 'https://www.youtube.com/watch?v=APRA2bc3nE8', title: 'Human-Leopard Conflicts in West Bengal - Case 1' },
      { url: 'https://www.youtube.com/watch?v=u4hJsBNcHUU', title: 'Human-Leopard Conflicts in West Bengal - Case 2' },
      { url: 'https://www.youtube.com/watch?v=4kNYC33h1aM', title: 'Human-Leopard Conflicts in West Bengal - Case 3' }
    ],
    assam: [
      { url: 'https://www.youtube.com/watch?v=dnqjkIfYiFU', title: 'Human-Leopard Conflicts in Assam - Case 1' },
      { url: 'https://www.youtube.com/watch?v=B6RzlNUSIy4', title: 'Human-Leopard Conflicts in Assam - Case 2' },
      { url: 'https://www.youtube.com/watch?v=uWGvCexQwnU', title: 'Human-Leopard Conflicts in Assam - Case 3' }
    ]
  },
  otherCountries: {
    nepal: [
      { url: 'https://www.youtube.com/watch?v=rRVY3qphXGM', title: 'Human-Leopard Conflicts in Nepal - Case 1' },
      { url: 'https://www.youtube.com/watch?v=mYKtA2ZZFi8', title: 'Human-Leopard Conflicts in Nepal - Case 2' },
      { url: 'https://www.youtube.com/watch?v=2pGfxcZZNfE', title: 'Human-Leopard Conflicts in Nepal - Case 3' }
    ],
    sriLanka: [
      { url: 'https://www.youtube.com/watch?v=bBQa4qg--6g', title: 'Human-Leopard Conflicts in Sri Lanka - Case 1' },
      { url: 'https://www.youtube.com/watch?v=8H-p1yjRQC4', title: 'Human-Leopard Conflicts in Sri Lanka - Case 2' },
      { url: 'https://www.youtube.com/watch?v=pAL7UpetgXo', title: 'Human-Leopard Conflicts in Sri Lanka - Case 3' }
    ],
    bhutan: [
      { url: 'https://www.youtube.com/watch?v=KTdl3BhUAWw', title: 'Human-Leopard Conflicts in Bhutan - Case 1' },
      { url: 'https://www.youtube.com/watch?v=iTLnKmH6T90', title: 'Human-Leopard Conflicts in Bhutan - Case 2' },
      { url: 'https://www.youtube.com/watch?v=Wlfl1M7fu_E', title: 'Human-Leopard Conflicts in Bhutan - Case 3' }
    ],
    bangladesh: [
      { url: 'https://www.youtube.com/watch?v=sJvGigH75lQ', title: 'Human-Leopard Conflicts in Bangladesh - Case 1' },
      { url: 'https://www.youtube.com/watch?v=RV5aLcqqUHE', title: 'Human-Leopard Conflicts in Bangladesh - Case 2' },
      { url: 'https://www.youtube.com/watch?v=XU26nGbvZRM', title: 'Human-Leopard Conflicts in Bangladesh - Case 3' }
    ],
    pakistan: [
      { url: 'https://www.youtube.com/watch?v=UB1P1h0qu_8', title: 'Human-Leopard Conflicts in Pakistan - Case 1' },
      { url: 'https://www.youtube.com/watch?v=yD9G9wzsjq0', title: 'Human-Leopard Conflicts in Pakistan - Case 2' },
      { url: 'https://www.youtube.com/watch?v=HJbzJYSEhek', title: 'Human-Leopard Conflicts in Pakistan - Case 3' }
    ]
  }
};

export const leopardAfricaVideos = {
  kenya: [
    { url: 'https://www.youtube.com/watch?v=6oAyFrDgFfo', title: 'Human-Leopard Conflicts in Kenya - Case 1' },
    { url: 'https://www.youtube.com/watch?v=hur-vNc9BEo', title: 'Human-Leopard Conflicts in Kenya - Case 2' },
    { url: 'https://www.youtube.com/watch?v=RPEFMMqXfow', title: 'Human-Leopard Conflicts in Kenya - Case 3' }
  ],
  tanzania: [
    { url: 'https://www.youtube.com/watch?v=VaijLRBXC_M', title: 'Human-Leopard Conflicts in Tanzania - Case 1' },
    { url: 'https://www.youtube.com/watch?v=cVvFn459EVc', title: 'Human-Leopard Conflicts in Tanzania - Case 2' },
    { url: 'https://www.youtube.com/watch?v=v_EkFzmiff4', title: 'Human-Leopard Conflicts in Tanzania - Case 3' }
  ],
  southAfrica: [
    { url: 'https://www.youtube.com/watch?v=p5wnKEXs6YM', title: 'Human-Leopard Conflicts in South Africa - Case 1' },
    { url: 'https://www.youtube.com/watch?v=46IwQcdIhx4', title: 'Human-Leopard Conflicts in South Africa - Case 2' },
    { url: 'https://www.youtube.com/watch?v=SVegbCBMX8s', title: 'Human-Leopard Conflicts in South Africa - Case 3' }
  ],
  namibia: [
    { url: 'https://www.youtube.com/watch?v=QjOJFlxWAIk', title: 'Human-Leopard Conflicts in Namibia - Case 1' },
    { url: 'https://www.youtube.com/watch?v=9V_1EhPJ940', title: 'Human-Leopard Conflicts in Namibia - Case 2' },
    { url: 'https://www.youtube.com/watch?v=SVXDkqWIsBw', title: 'Human-Leopard Conflicts in Namibia - Case 3' }
  ],
  botswana: [
    { url: 'https://www.youtube.com/watch?v=JrxdzH7UYlA', title: 'Human-Leopard Conflicts in Botswana - Case 1' },
    { url: 'https://www.youtube.com/watch?v=SzVJUVrl8a8', title: 'Human-Leopard Conflicts in Botswana - Case 2' },
    { url: 'https://www.youtube.com/watch?v=EXffxtLMl5I', title: 'Human-Leopard Conflicts in Botswana - Case 3' }
  ],
  zimbabwe: [
    { url: 'https://www.youtube.com/watch?v=N4QubWGenus', title: 'Human-Leopard Conflicts in Zimbabwe - Case 1' },
    { url: 'https://www.youtube.com/watch?v=c3U2BOsRwxk', title: 'Human-Leopard Conflicts in Zimbabwe - Case 2' },
    { url: 'https://www.youtube.com/watch?v=emmns61Cd6g', title: 'Human-Leopard Conflicts in Zimbabwe - Case 3' }
  ],
  uganda: [
    { url: 'https://www.youtube.com/watch?v=FPdoNBm4J_A', title: 'Human-Leopard Conflicts in Uganda - Case 1' },
    { url: 'https://www.youtube.com/watch?v=_F2OuOobBV8', title: 'Human-Leopard Conflicts in Uganda - Case 2' },
    { url: 'https://www.youtube.com/watch?v=jnt6EcGhmKY', title: 'Human-Leopard Conflicts in Uganda - Case 3' }
  ],
  ethiopia: [
    { url: 'https://www.youtube.com/watch?v=tjOdcgBmonU', title: 'Human-Leopard Conflicts in Ethiopia - Case 1' },
    { url: 'https://www.youtube.com/watch?v=fGjRDO9fNsU', title: 'Human-Leopard Conflicts in Ethiopia - Case 2' },
    { url: 'https://www.youtube.com/watch?v=259FNoC4YQg', title: 'Human-Leopard Conflicts in Ethiopia - Case 3' }
  ]
};

// Enhanced Conference Videos
export const conferencesVideos: VideoData[] = [
  { url: 'https://www.youtube.com/watch?v=soeuVnaT7oE', title: 'Meet a Symbol of American Resilience - Bison | What\'s Wild' },
  { url: 'https://www.youtube.com/watch?v=L4eOhuLDfeU', title: 'Bison Fight for Mating Rights | BBC Earth' },
  { url: 'https://www.youtube.com/watch?v=zySIhCT2IKk', title: 'Cattle Contract Library, Grazing on Federal Lands and Wild Bison Hot Topics in New Orleans' }
];

// AI Innovation Videos for Each Animal
export const elephantAIVideos: VideoData[] = [
  { url: 'https://youtu.be/example-elephant-ai-1', title: 'AI-Powered Elephant Conflict Prediction System' },
  { url: 'https://youtu.be/example-elephant-ai-2', title: 'Machine Learning for Elephant Behavior Analysis' },
  { url: 'https://youtu.be/example-elephant-ai-3', title: 'AI-Driven Elephant Conservation Strategies' }
];

export const leopardAIVideos: VideoData[] = [
  { url: 'https://youtu.be/example-leopard-ai-1', title: 'AI-Powered Leopard Conflict Prediction System' },
  { url: 'https://youtu.be/example-leopard-ai-2', title: 'Machine Learning for Leopard Behavior Analysis' },
  { url: 'https://youtu.be/example-leopard-ai-3', title: 'AI-Driven Leopard Conservation Strategies' }
];

export const tigerAIVideos: VideoData[] = [
  { url: 'https://youtu.be/example-tiger-ai-1', title: 'AI-Powered Tiger Conflict Prediction System' },
  { url: 'https://youtu.be/example-tiger-ai-2', title: 'Machine Learning for Tiger Behavior Analysis' },
  { url: 'https://youtu.be/example-tiger-ai-3', title: 'AI-Driven Tiger Conservation Strategies' }
];

export const lionAIVideos: VideoData[] = [
  { url: 'https://youtu.be/example-lion-ai-1', title: 'AI-Powered Lion Conflict Prediction System' },
  { url: 'https://youtu.be/example-lion-ai-2', title: 'Machine Learning for Lion Behavior Analysis' },
  { url: 'https://youtu.be/example-lion-ai-3', title: 'AI-Driven Lion Conservation Strategies' }
];

export const slothBearAIVideos: VideoData[] = [
  { url: 'https://youtu.be/example-slothbear-ai-1', title: 'AI-Powered Sloth Bear Conflict Prediction System' },
  { url: 'https://youtu.be/example-slothbear-ai-2', title: 'Machine Learning for Sloth Bear Behavior Analysis' },
  { url: 'https://youtu.be/example-slothbear-ai-3', title: 'AI-Driven Sloth Bear Conservation Strategies' }
];

export const rhinoAIVideos: VideoData[] = [
  { url: 'https://youtu.be/example-rhino-ai-1', title: 'AI-Powered Rhino Conflict Prediction System' },
  { url: 'https://youtu.be/example-rhino-ai-2', title: 'Machine Learning for Rhino Behavior Analysis' },
  { url: 'https://youtu.be/example-rhino-ai-3', title: 'AI-Driven Rhino Conservation Strategies' }
];

export const gaurAIVideos: VideoData[] = [
  { url: 'https://youtu.be/example-gaur-ai-1', title: 'AI-Powered Gaur Conflict Prediction System' },
  { url: 'https://youtu.be/example-gaur-ai-2', title: 'Machine Learning for Gaur Behavior Analysis' },
  { url: 'https://youtu.be/example-gaur-ai-3', title: 'AI-Driven Gaur Conservation Strategies' }
];

// Tiger Videos Data
export const tigerVideos = {
  india: {
    madhyaPradesh: [
      { url: 'https://www.youtube.com/watch?v=PbXEqjnW0QU', title: 'Human-Tiger Conflicts in Madhya Pradesh - Case 1' },
      { url: 'https://www.youtube.com/watch?v=7B3DxVllVCM', title: 'Human-Tiger Conflicts in Madhya Pradesh - Case 2' },
      { url: 'https://www.youtube.com/watch?v=oHuyn2Zla1o', title: 'Human-Tiger Conflicts in Madhya Pradesh - Case 3' }
    ],
    karnataka: [
      { url: 'https://www.youtube.com/watch?v=TVLtLev5nPU', title: 'Human-Tiger Conflicts in Karnataka - Case 1' },
      { url: 'https://www.youtube.com/watch?v=lcdWU56pB30', title: 'Human-Tiger Conflicts in Karnataka - Case 2' },
      { url: 'https://www.youtube.com/watch?v=cjP8hn_iIwI', title: 'Human-Tiger Conflicts in Karnataka - Case 3' }
    ],
    assam: [
      { url: 'https://www.youtube.com/watch?v=I6XkweH77e0', title: 'Human-Tiger Conflicts in Assam - Case 1' },
      { url: 'https://www.youtube.com/watch?v=TyWF7sl-aY8', title: 'Human-Tiger Conflicts in Assam - Case 2' },
      { url: 'https://www.youtube.com/watch?v=dpGbXGs-2F4', title: 'Human-Tiger Conflicts in Assam - Case 3' }
    ],
    uttarakhand: [
      { url: 'https://www.youtube.com/watch?v=ZCFVDjFhNuY', title: 'Human-Tiger Conflicts in Uttarakhand - Case 1' },
      { url: 'https://www.youtube.com/watch?v=dwJHIQhVCAs', title: 'Human-Tiger Conflicts in Uttarakhand - Case 2' },
      { url: 'https://www.youtube.com/watch?v=cLfEDMoUgYg', title: 'Human-Tiger Conflicts in Uttarakhand - Case 3' }
    ]
  },
  sriLanka: [
    { url: 'https://www.youtube.com/watch?v=isYPtYLAF6c', title: 'Human-Tiger Conflicts in Sri Lanka - Case 1' },
    { url: 'https://www.youtube.com/watch?v=vi297kHLFnM', title: 'Human-Tiger Conflicts in Sri Lanka - Case 2' },
    { url: 'https://www.youtube.com/watch?v=HFp0bjSgwe4', title: 'Human-Tiger Conflicts in Sri Lanka - Case 3' }
  ],
  nepal: [
    { url: 'https://www.youtube.com/watch?v=2pGfxcZZNfE', title: 'Human-Tiger Conflicts in Nepal - Case 1' },
    { url: 'https://www.youtube.com/watch?v=AQ3yDuRdzxU', title: 'Human-Tiger Conflicts in Nepal - Case 2' },
    { url: 'https://www.youtube.com/watch?v=NRaTPTijHTA', title: 'Human-Tiger Conflicts in Nepal - Case 3' }
  ],
  bhutan: [
    { url: 'https://www.youtube.com/watch?v=HxI1vieMFzQ', title: 'Human-Tiger Conflicts in Bhutan - Case 1' },
    { url: 'https://www.youtube.com/watch?v=YRv-dVy_Pnw', title: 'Human-Tiger Conflicts in Bhutan - Case 2' },
    { url: 'https://www.youtube.com/watch?v=Eono78jNrlo', title: 'Human-Tiger Conflicts in Bhutan - Case 3' }
  ]
};

// Lion Videos Data
export const lionVideos = {
  africa: {
    kenya: [
      { url: 'https://www.youtube.com/watch?v=FbYtASAakAI', title: 'Human-Lion Conflicts in Kenya - Case 1' },
      { url: 'https://www.youtube.com/watch?v=l_YEcT7Umfw', title: 'Human-Lion Conflicts in Kenya - Case 2' },
      { url: 'https://www.youtube.com/watch?v=y3p4GAU5ahk', title: 'Human-Lion Conflicts in Kenya - Case 3' }
    ],
    tanzania: [
      { url: 'https://www.youtube.com/watch?v=e_WepXadr1o', title: 'Human-Lion Conflicts in Tanzania - Case 1' },
      { url: 'https://www.youtube.com/watch?v=MUJ3iV_KYeo', title: 'Human-Lion Conflicts in Tanzania - Case 2' },
      { url: 'https://www.youtube.com/watch?v=hVViD75i1j4', title: 'Human-Lion Conflicts in Tanzania - Case 3' }
    ],
    southAfrica: [
      { url: 'https://www.youtube.com/watch?v=Lw2qwK-6r-0', title: 'Human-Lion Conflicts in South Africa - Case 1' },
      { url: 'https://www.youtube.com/watch?v=8-6YqxYAkd0', title: 'Human-Lion Conflicts in South Africa - Case 2' },
      { url: 'https://www.youtube.com/watch?v=0z6rmSWUPGs', title: 'Human-Lion Conflicts in South Africa - Case 3' }
    ]
  },
  asia: {
    india: {
      gujarat: [
        { url: 'https://www.youtube.com/watch?v=1gCdt0aVTbE', title: 'Human-Lion Conflicts in Gujarat - Case 1' },
        { url: 'https://www.youtube.com/watch?v=vx_5RxVoTLw', title: 'Human-Lion Conflicts in Gujarat - Case 2' },
        { url: 'https://www.youtube.com/watch?v=toet9SaLs_', title: 'Human-Lion Conflicts in Gujarat - Case 3' }
      ]
    }
  }
};

// Sloth Bear Videos Data
export const slothBearVideos = {
  india: {
    madhyaPradesh: [
      { url: 'https://www.youtube.com/watch?v=6Lm29zfpLCs', title: 'Human-Sloth Bear Conflicts in Madhya Pradesh - Case 1' },
      { url: 'https://www.youtube.com/watch?v=4kNYC33h1aM', title: 'Human-Sloth Bear Conflicts in Madhya Pradesh - Case 2' },
      { url: 'https://www.youtube.com/watch?v=xhzaWlhRgbY', title: 'Human-Sloth Bear Conflicts in Madhya Pradesh - Case 3' }
    ],
    karnataka: [
      { url: 'https://www.youtube.com/watch?v=USZEZaRyU4Y', title: 'Human-Sloth Bear Conflicts in Karnataka - Case 1' },
      { url: 'https://www.youtube.com/watch?v=jbqn_ThRo20', title: 'Human-Sloth Bear Conflicts in Karnataka - Case 2' },
      { url: 'https://www.youtube.com/watch?v=YE36h206Fh4', title: 'Human-Sloth Bear Conflicts in Karnataka - Case 3' }
    ],
    telangana: [
      { url: 'https://www.youtube.com/watch?v=dcNvtzTs9l4', title: 'Human-Sloth Bear Conflicts in Telangana - Case 1' },
      { url: 'https://www.youtube.com/watch?v=uHkhs7ydGGg', title: 'Human-Sloth Bear Conflicts in Telangana - Case 2' },
      { url: 'https://www.youtube.com/watch?v=a4jgDIFiET8', title: 'Human-Sloth Bear Conflicts in Telangana - Case 3' }
    ]
  },
  sriLanka: [
    { url: 'https://www.youtube.com/watch?v=RV5aLcqqUHE', title: 'Human-Sloth Bear Conflicts in Sri Lanka - Case 1' },
    { url: 'https://www.youtube.com/watch?v=XU26nGbvZRM', title: 'Human-Sloth Bear Conflicts in Sri Lanka - Case 2' },
    { url: 'https://www.youtube.com/watch?v=yD9G9wzsjq0', title: 'Human-Sloth Bear Conflicts in Sri Lanka - Case 3' }
  ]
};

// Rhino Videos Data
export const rhinoVideos = {
  asia: {
    india: {
      assam: [
        { url: 'https://www.youtube.com/watch?v=YCXOtcharM0', title: 'Human-Rhino Conflicts in Assam - Case 1' },
        { url: 'https://www.youtube.com/watch?v=pElnuK73iOA', title: 'Human-Rhino Conflicts in Assam - Case 2' },
        { url: 'https://www.youtube.com/watch?v=JPtyEhEndRM', title: 'Human-Rhino Conflicts in Assam - Case 3' }
      ],
      westBengal: [
        { url: 'https://www.youtube.com/watch?v=4OQ_94ZxNdc', title: 'Human-Rhino Conflicts in West Bengal - Case 1' },
        { url: 'https://www.youtube.com/watch?v=2YDJM-vLU5I', title: 'Human-Rhino Conflicts in West Bengal - Case 2' },
        { url: 'https://www.youtube.com/watch?v=EO5eR9VRiLw', title: 'Human-Rhino Conflicts in West Bengal - Case 3' }
      ],
      uttarPradesh: [
        { url: 'https://www.youtube.com/watch?v=E6LL1hAcoPk', title: 'Human-Rhino Conflicts in Uttar Pradesh - Case 1' },
        { url: 'https://www.youtube.com/watch?v=NlJEhsU56-E', title: 'Human-Rhino Conflicts in Uttar Pradesh - Case 2' },
        { url: 'https://www.youtube.com/watch?v=x3j0RCKPBY4', title: 'Human-Rhino Conflicts in Uttar Pradesh - Case 3' }
      ]
    },
    nepal: [
      { url: 'https://www.youtube.com/watch?v=4tAAk6SDDvE', title: 'Human-Rhino Conflicts in Nepal - Case 1' },
      { url: 'https://www.youtube.com/watch?v=LM6bBQ3qBYg', title: 'Human-Rhino Conflicts in Nepal - Case 2' },
      { url: 'https://www.youtube.com/watch?v=40pi7OQzrDg', title: 'Human-Rhino Conflicts in Nepal - Case 3' }
    ],
    bhutan: [
      { url: 'https://www.youtube.com/watch?v=FYT_fg9jZXA', title: 'Human-Rhino Conflicts in Bhutan - Case 1' },
      { url: 'https://www.youtube.com/watch?v=e8HTiU74nYQ', title: 'Human-Rhino Conflicts in Bhutan - Case 2' },
      { url: 'https://www.youtube.com/watch?v=9V_1EhPJ940', title: 'Human-Rhino Conflicts in Bhutan - Case 3' }
    ]
  },
  africa: {
    kenya: [
      { url: 'https://www.youtube.com/watch?v=R8e0eJmTCgA', title: 'Human-Rhino Conflicts in Kenya - Case 1' },
      { url: 'https://www.youtube.com/watch?v=emmns61Cd6g', title: 'Human-Rhino Conflicts in Kenya - Case 2' },
      { url: 'https://www.youtube.com/watch?v=jnt6EcGhmKY', title: 'Human-Rhino Conflicts in Kenya - Case 3' }
    ],
    namibia: [
      { url: 'https://www.youtube.com/watch?v=SVXDkqWIsBw', title: 'Human-Rhino Conflicts in Namibia - Case 1' },
      { url: 'https://www.youtube.com/watch?v=EXffxtLMl5I', title: 'Human-Rhino Conflicts in Namibia - Case 2' },
      { url: 'https://www.youtube.com/watch?v=iy2uViHVQ_8', title: 'Human-Rhino Conflicts in Namibia - Case 3' }
    ],
    southAfrica: [
      { url: 'https://www.youtube.com/watch?v=ZiHEbKrjIio', title: 'Human-Rhino Conflicts in South Africa - Case 1' },
      { url: 'https://www.youtube.com/watch?v=ZNkWeRvQ3w4', title: 'Human-Rhino Conflicts in South Africa - Case 2' },
      { url: 'https://www.youtube.com/watch?v=k60r_Zpgajg', title: 'Human-Rhino Conflicts in South Africa - Case 3' }
    ]
  }
};

// Gaur Videos Data
export const gaurVideos = {
  india: {
    maharashtra: [
      { url: 'https://www.youtube.com/watch?v=GyVkvhTZBfA', title: 'Human-Gaur Conflicts in Maharashtra - Case 1' },
      { url: 'https://www.youtube.com/watch?v=g0ZNBMFCdME', title: 'Human-Gaur Conflicts in Maharashtra - Case 2' },
      { url: 'https://www.youtube.com/watch?v=gDnp_apCAhE', title: 'Human-Gaur Conflicts in Maharashtra - Case 3' }
    ],
    kerala: [
      { url: 'https://www.youtube.com/watch?v=09gJsToX9oY', title: 'Human-Gaur Conflicts in Kerala - Case 1' },
      { url: 'https://www.youtube.com/watch?v=5E-s19uGCDs', title: 'Human-Gaur Conflicts in Kerala - Case 2' },
      { url: 'https://www.youtube.com/watch?v=dcNvtzTs9l4', title: 'Human-Gaur Conflicts in Kerala - Case 3' }
    ],
    karnataka: [
      { url: 'https://www.youtube.com/watch?v=A-ia3_CBLOc', title: 'Human-Gaur Conflicts in Karnataka - Case 1' },
      { url: 'https://www.youtube.com/watch?v=yCoMOMacfFw', title: 'Human-Gaur Conflicts in Karnataka - Case 2' },
      { url: 'https://www.youtube.com/watch?v=uHkhs7ydGGg', title: 'Human-Gaur Conflicts in Karnataka - Case 3' }
    ]
  },
  sriLanka: [
    { url: 'https://www.youtube.com/watch?v=HJbzJYSEhek', title: 'Human-Gaur Conflicts in Sri Lanka - Case 1' },
    { url: 'https://www.youtube.com/watch?v=JfixnGYsK68', title: 'Human-Gaur Conflicts in Sri Lanka - Case 2' },
    { url: 'https://www.youtube.com/watch?v=RV5aLcqqUHE', title: 'Human-Gaur Conflicts in Sri Lanka - Case 3' }
  ]
};
