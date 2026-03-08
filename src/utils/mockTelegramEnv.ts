declare global {
  interface Window {
    Telegram?: any;
  }
}

export const initTelegramMock = () => {
  if (typeof window !== "undefined" && !window.Telegram) {
    (window as any).Telegram = {
      WebApp: {
        initData:
          "user=%7B%22id%22%3A123%2C%22first_name%22%3A%22Test%22%2C%22last_name%22%3A%22User%22%2C%22username%22%3A%22testuser%22%2C%22language_code%22%3A%22en%22%7D",
        initDataUnsafe: {
          user: {
            id: 123,
            first_name: "Test",
            last_name: "User",
            username: "testuser",
            language_code: "en",
          },
        },
        version: "7.0",
        platform: "ios",
        colorScheme: "dark",
        themeParams: {
          bg_color: "#18222d",
          text_color: "#ffffff",
          hint_color: "#b1c3d5",
          link_color: "#62bcea",
          button_color: "#2ea6ff",
          button_text_color: "#ffffff",
          secondary_bg_color: "#131415",
          header_bg_color: "#18222d",
          bottom_bar_bg_color: "#18222d",
          accent_text_color: "#62bcea",
          section_bg_color: "#18222d",
          section_header_text_color: "#b1c3d5",
          subtitle_text_color: "#b1c3d5",
          destructive_text_color: "#e16868",
        },
        isExpanded: true,
        viewportHeight: 800,
        viewportStableHeight: 800,
        isClosingConfirmationEnabled: false,
        headerColor: "#18222d",
        backgroundColor: "#18222d",
        BackButton: {
          isVisible: false,
          show: () => {},
          hide: () => {},
          onClick: () => {},
          offClick: () => {},
        },
        MainButton: {
          text: "MOCK MAIN BUTTON",
          color: "#2ea6ff",
          textColor: "#ffffff",
          isVisible: false,
          isProgressVisible: false,
          isActive: true,
          show: () => {},
          hide: () => {},
          enable: () => {},
          disable: () => {},
          showProgress: () => {},
          hideProgress: () => {},
          setParams: () => {},
          onClick: () => {},
          offClick: () => {},
        },
        HapticFeedback: {
          impactOccurred: () => {},
          notificationOccurred: () => {},
          selectionChanged: () => {},
        },
        expand: () => {},
        close: () => {},
        ready: () => {},
        sendData: () => {},
        openLink: () => {},
        openTelegramLink: () => {},
        openInvoice: () => {},
        showPopup: () => {},
        showAlert: () => {},
        showConfirm: () => {},
        showScanQrPopup: () => {},
        closeScanQrPopup: () => {},
        readTextFromClipboard: () => {},
        requestWriteAccess: () => {},
        requestContact: () => {},
        switchInlineQuery: () => {},
        setHeaderColor: () => {},
        setBackgroundColor: () => {},
        onEvent: () => {},
        offEvent: () => {},
      },
    };
  }
};
