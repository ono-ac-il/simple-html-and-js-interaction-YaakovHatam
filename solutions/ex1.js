function findParty() {
    const partyLetters = document.getElementById('name').value;

    var res;
    switch (partyLetters) {
        case "נר":
            res = "אנחנו";
            break;
        case "צף":
            res = "חץ";
            break;
        case "קי":
            res = "שמע";
            break;
    }

    document.getElementById('result').innerHTML = res;
}

const $button = document.getElementById("send");

$button.addEventListener('click', findParty);
