window.Spectrum.Event.$on('Devices', (payload) => {
  const AnalyticEvent = payload.$hopX.AnalyticEvent
  
  const buttons = document.querySelectorAll(`[data-affiliateid="${payload.data.Id}"]`);
  buttons.forEach((button) => {
    const productUrl = button.dataset.url
    button.addEventListener('click', () => {
      AnalyticEvent('onProductClicked', {
        data: payload.data
      })
      window.open(productUrl, '_blank')
    })
  })
})

