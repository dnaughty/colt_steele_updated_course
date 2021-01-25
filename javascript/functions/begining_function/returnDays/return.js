function returnDay(num) {
    const days = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if(num > 0 && num <= 7) {
        return days[num - 1]
    } else {
        return null
    }
        
}