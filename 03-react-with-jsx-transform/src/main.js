import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
function Avatar(_a) {
    var name = _a.name, _b = _a.status, status = _b === void 0 ? 'offline' : _b, _c = _a.size, size = _c === void 0 ? 64 : _c;
    var iconPath = '';
    var statusMessage = '';
    switch (status) {
        case 'offline':
            iconPath = '/icons/status-offline.svg';
            statusMessage = '오프라인';
            break;
        case 'online':
            iconPath = '/icons/status-online.svg';
            statusMessage = '온라인';
            break;
        case 'dont-disturb':
            iconPath = '/icons/status-dont-disturb.svg';
            statusMessage = '방해금지';
            break;
        case 'away':
            iconPath = '/icons/status-away.svg';
            statusMessage = '자리비움';
            break;
    }
    var label = "".concat(name, " (").concat(statusMessage, ")");
    return (React.createElement("li", { className: "avatar" },
        React.createElement("figure", { "aria-label": label, title: label },
            React.createElement("div", { className: "cover" },
                React.createElement("img", { src: "/avatar/".concat(name, ".png"), alt: "" })),
            React.createElement("figcaption", null,
                React.createElement("img", { src: iconPath, alt: "" })))));
}
function AvatarPage() {
    return (React.createElement("ul", { class: "avatarList" },
        React.createElement(Avatar, { name: "\uB9F9\uAD6C", status: "offline" }),
        React.createElement(Avatar, { name: "\uCCA0\uC218", status: "dont-disturb" }),
        React.createElement(Avatar, { name: "\uC720\uB9AC", status: "away" }),
        React.createElement(Avatar, { name: "\uD6C8\uC774", status: "online" }),
        React.createElement(Avatar, { name: "\uC2E0\uD615\uB9CC", status: "online" })));
}
var container = document.getElementById('app');
if (container) {
    var reactDomRoot = ReactDOM.createRoot(container);
    reactDomRoot.render(React.createElement(AvatarPage, null));
}
