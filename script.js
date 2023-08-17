function updateOutput() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    if (inputText) {
      const encodedText = btoa(inputText);
      outputText.innerText = encodedText;
    } else {
      outputText.innerText = '';
    }
  }
  
  function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2000);
  }
  
  function copyText() {
    const outputText = document.getElementById('outputText');
    const textArea = document.createElement('textarea');
    textArea.value = outputText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast();
  }
  
  document.getElementById('outputText').addEventListener('click', copyText);
  document.getElementById('inputText').addEventListener('input', updateOutput);
  