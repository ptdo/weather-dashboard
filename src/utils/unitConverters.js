export function toFarenheit(c) {
  return (c * 9) / 5 + 32
}

export function toLocalDateTime (unix, withDate) {
  if (withDate) {
    return  new Date(unix * 1000).toLocaleString("en-us", {  
      hourCycle: 'h23', 
      hour: '2-digit',
      minute:'2-digit',
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    })
  }

  return new Date(unix * 1000).toLocaleTimeString("en-GB", { 
    hourCycle: 'h23', 
    hour: '2-digit',
    minute:'2-digit' 
  })
}

export function getDateName (unix) {
  return new Date(unix * 1000).toLocaleDateString("en-us", { weekday: 'short' })
}

export function toDirection(degree) {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  return directions[Math.floor(degree / 45 + 0.5) % 8];
}

