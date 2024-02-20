import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";



describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);

      // Simuler la soumission du formulaire
      fireEvent.click(screen.getByText("Envoyer"));

      // Attendre qu'en cours soit affiché 
      await screen.findByText("En cours");

      // Attendere que le texte "Message envoyé !" soit affiché
      await screen.findByText("Message envoyé !");
    });
  });


});


describe("When a page is created", () => {
  it("a list of events is displayed", async()=> {
    // to implement
    render(<Home />);
    await screen.findByText("CEO");
  })
  it("a list of people is displayed", async() => {
    render(<Home />);
    await screen.findByText("CEO");
  })
  it("a footer is displayed", async() => {
    render(<Home />);
    await screen.findByText("Contactez-nous");
  })
  
  
  it("an event card, with the last event, is displayed",async () => {
    render(<Home />);
   screen.queryByText("AOUT")
    // OK implemented
  })
    
});
  

