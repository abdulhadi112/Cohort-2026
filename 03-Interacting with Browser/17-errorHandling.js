// Try-catch 
function bootNavigation(mapLoaded) {
  // When ther is uncertainty, we use try-catch
  try {
    console.log(`Is navigation loaded : ${mapLoaded}`);
    if (!mapLoaded) {
      throw new Error("Map wan't passed")
    }
    return 'NAV_OK'
  } catch (err) {
    // This part run when the try fails
    console.log(`Navigation Failed : ${err.message}`);
  } finally {
    // This runs all the time
    console.log(`Navigation sequence completed`);
  }
}

const status1 = bootNavigation(true)
console.log(status1)

