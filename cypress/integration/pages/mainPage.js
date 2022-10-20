
class MainPage {
    static visit() {
        cy.visit("")
    }

    static elements() {
        MainPage.visit()
        cy.contains("Elements").click()
    }

    static forms() {
        MainPage.visit().contains("Forms").click()
    }
    static alerts() {
        MainPage.visit().contains("Alerts, Frame & Windows").click()
    }
    static widgets() {
        MainPage.visit().contains("Widgets").click()
    }
    static interactions() {
        MainPage.visit().contains("Interactions").click()
    }
    static app() {
        MainPage.visit().contains("Book Store Application").click()
    }
}

export default MainPage