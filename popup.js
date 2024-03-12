document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    const inputText = document.getElementById('inputText');
    const translationResult = document.getElementById('translationResult');
    const inputLanguageSelect = document.getElementById('inputLanguage');
    const targetLanguageSelect = document.getElementById('targetLanguage');

    translateButton.addEventListener('click', function() {
      const textToTranslate = inputText.value;
      const inputLanguage = inputLanguageSelect.value;
      const targetLanguage = targetLanguageSelect.value;
      translateText(textToTranslate, inputLanguage, targetLanguage);
    });

    async function translateText(text, inputLang, targetLang) {
      let apiURL;
      if (inputLang === 'en' && targetLang === 'es') {
        apiURL = 'https://api-inference.huggingface.co/models/adeebkm/en-es';
      } else if (inputLang === 'es' && targetLang === 'en') {
        apiURL = 'https://api-inference.huggingface.co/models/adeebkm/es-en';
      } else {
        // Handle other language combinations or provide an error message
        console.error('Unsupported language combination');
        return;
      }

      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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' // Replace YOUR_API_KEY with your actual API key
        },
        body: JSON.stringify({ inputs: text })
      });
      
      const data = await response.json();
      translationResult.innerText = data[0];
    }
});
