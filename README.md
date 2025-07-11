# language-app

## Structure

```
dictionary/
   en.json
   pl.json
getArch.py
index.html
js/
   classes/
      Dictionary.js
      index.js
      LocalStorage.js
      ModalWindow.js
   components/
      Filter.js
      index.js
      Word.js
      WordInfo.js
   config/
      index.js
      initElements.js
      initVars.js
      setEvents.js
   globalVariables.js
   index.js
   main.js
   programs/
      index.js
      TrainWords.js
   utils/
      index.js
      parseWords.js
      prompts.js
      renderDictionary.js
      throttle.js
scss/
   dictionary.scss
   filter.scss
   global.scss
   header.scss
   index.scss
   mod-colors.scss
   modal.scss
   scroll.scss
   variables.scss

C:\my_files\programming\GITHUB\language-app\src>python getArch.py
dictionary/
   en.json
   pl.json
getArch.py
index.html
js/
   classes/
      Dictionary.js
      index.js
      LocalStorage.js
      ModalWindow.js
   components/
      Filter.js
      index.js
      Word.js
      WordInfo.js
   config/
      index.js
      initElements.js
      initVars.js
      setEvents.js
   globalVariables.js
   index.js
   main.js
   programs/
      index.js
      TrainWords.js
   utils/
      index.js
      parseWords.js
      prompts.js
      renderDictionary.js
      throttle.js
scss/
   dictionary.scss
   filter.scss
   global.scss
   header.scss
   index.scss
   mod-colors.scss
   modal.scss
   scroll.scss
   variables.scss
```

**index.html** - main entry point.

**dictionary/** - where words are stored in json files.