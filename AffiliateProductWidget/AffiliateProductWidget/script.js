window.Spectrum.Event.$on('Devices', (payload) => {
  const AnalyticEvent = payload.$hopX.AnalyticEvent
  
  const container = document.querySelector(`[data-affiliateid="${payload.data.Id}"]`)
  if (container && container.dataset.clickable) {
    return
  } else if (container) {
    let data = container.dataset
    data.clickable = true
    const buttons = container.querySelectorAll('.affiliateButton')
    const images = container.querySelectorAll('.affiliateProductImage')
    const anchors = container.querySelectorAll('.affiliateProductDescription a')
    const productUrl = container.dataset.url
    const listeners = [...buttons, ...images, ...anchors]
    const payloadData = Object.assign({}, payload.data)
    payloadData.AnalyticsData.affiliate_device_type = container.dataset.affiliatetype;
    listeners.forEach((listener) => {
      listener.addEventListener('click', () => {
        AnalyticEvent('onProductClicked', {
          data: payloadData
        })
        window.open(productUrl, '_blank')    
      })
    })
  }
})
