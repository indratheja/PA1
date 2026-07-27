/**
 * Handles dialog/alert interactions in Playwright
 * @param {Page} page - The Playwright page object
 * @param {string} action - 'accept' or 'dismiss' the dialog
 * @param {string} text - Optional text to enter for prompt dialogs
 */
export async function createDialog(page, action = 'accept', text = null) {
    return new Promise((resolve) => {
        page.on('dialog', async (dialog) => {
            console.log(`Dialog type: ${dialog.type()}`);
            console.log(`Dialog message: ${dialog.message()}`);

            if (action === 'accept') {
                if (text && dialog.type() === 'prompt') {
                    await dialog.accept(text);
                } else {
                    await dialog.accept();
                }
            } else if (action === 'dismiss') {
                await dialog.dismiss();
            }
            
            resolve(dialog.message());
        });
    });
}

/**
 * Accepts all dialogs on a page
 * @param {Page} page - The Playwright page object
 */
export function acceptAllDialogs(page) {
    page.on('dialog', dialog => dialog.accept());
}

/**
 * Dismisses all dialogs on a page
 * @param {Page} page - The Playwright page object
 */
export function dismissAllDialogs(page) {
    page.on('dialog', dialog => dialog.dismiss());
}
