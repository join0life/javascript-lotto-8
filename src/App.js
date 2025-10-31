import LottoController from "./controller/LottoController.js";

class App {
  async run() {
    /**
     * @TODO 진입점
     */
    const lottoController = new LottoController();
    await lottoController.run();
  }
}

export default App;
