interface MyMemoryResponse {
  responseData: {
    translatedText: string;
  };
  responseStatus: number;
}

export async function translateText(
  text: string,
  targetLanguage: string = 'pt',
  sourceLanguage: string = 'en'
): Promise<string> {
  if (!text) return text;

  try {
    const langPair = `${sourceLanguage}|${targetLanguage}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Translation failed: ${response.statusText}`);
    }

    const data: MyMemoryResponse = await response.json();
    
    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    }
    
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; 
  }
}

const translationCache = new Map<string, string>();

export async function translateSynopsis(synopsis: string): Promise<string> {
  if (!synopsis) return synopsis;

  const cacheKey = `synopsis_${synopsis.substring(0, 50)}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }

  const translated = await translateText(synopsis, 'pt-BR', 'en-US');
  
  translationCache.set(cacheKey, translated);
  
  return translated;
}
