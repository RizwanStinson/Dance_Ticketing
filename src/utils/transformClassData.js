function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
  
  function formatTime(timeFrom, timeTo) {
    const from = new Date(timeFrom);
    const to = new Date(timeTo);
    return `${from.getHours().toString().padStart(2, '0')}:${from.getMinutes().toString().padStart(2, '0')} - ${to.getHours().toString().padStart(2, '0')}:${to.getMinutes().toString().padStart(2, '0')}`;
  }
  
  export function transformClassData(apiData) {
    const transformedData = {
      nyc: [],
      private: [],
      online: []
    };
  
    apiData.forEach((item) => {
      const transformedItem = {
        id:item._id,
        date: formatDate(item.classDate),
        time: item.classType.toLowerCase() === 'private' ? 'By appointment' : formatTime(item.timeFrom, item.timeTo),
        basePrice: item.ticketPrice,
        eventName: `${item.classType} Yoga Class`,
        eventDescription: item.description,
        venue: item.venue
      };
  
      switch (item.classType.toLowerCase()) {
        case 'nyc/nj group':
          transformedData.nyc.push(transformedItem);
          break;
        case 'private':
          transformedData.private.push(transformedItem);
          break;
        case 'online':
          transformedData.online.push(transformedItem);
          break;
        default:
          console.warn(`Unknown class type: ${item.classType}`);
      }
    });
  
    return transformedData;
  }
  