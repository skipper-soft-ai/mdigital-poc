/**
 * This method is used to remove overlaying containers.
 * Understanding the root of the issue is not a part of this POC
 * @param page
 * @returns {Promise<void>}
 */
module.exports = async function handleOverlays(page) {
    try {
        await page.evaluate(() => {
            document.getElementsByTagName('modal-container')[0].remove();
            document.getElementsByTagName('bs-modal-backdrop')[0].remove();
        });
    } catch (err) {
        // Ignoring platform dependent flows
    }
}
