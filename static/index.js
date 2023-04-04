console.log("Hello Panda Filehelper");

function enableOrDisableSendButton(textarea) {
    const sendButton = document.querySelector("div.msg-editor-send-button");

    if (textarea.value !== "") {
        sendButton.classList.add("msg-editor-send-button-enabled");
    } else {
        sendButton.classList.remove("msg-editor-send-button-enabled");
    }
}
