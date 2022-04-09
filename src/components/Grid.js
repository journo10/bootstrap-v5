import React from "react";

const Grid = () => {
    return (
        <>
            {/* Örnek 1 */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm bg-success">Col 1</div>
                    <div className="col-sm bg-warning">Col 2</div>
                    <div className="col-sm bg-info">Col 3</div>
                </div>
            </div>

            {/* Örnek 2 */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-success">Lorem ipsum dolor sit amet.</div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-warning">Lorem ipsum dolor sit amet.</div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-danger">Lorem ipsum dolor sit amet.</div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-dark text-white">Lorem ipsum dolor sit amet.</div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-info">Lorem ipsum dolor sit amet.</div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-primary">Lorem ipsum dolor sit amet.</div>
                </div>
            </div>

            {/* Örnek 3 */}
            <main className="container mt-5">
                <div className="row">
                    <section className="col-sm-8">
                        <article className="row mb-3 text-white">
                            <div className="col-sm-8 bg-secondary rounded p-3">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repellat odit facilis quos debitis omnis ratione modi dolor consequatur.</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="rounded" src="https://picsum.photos/id/30/180" alt="img" />
                            </div>
                        </article>
                        <article className="row mb-3 text-white">
                            <div className="col-sm-8 bg-secondary rounded p-3">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repellat odit facilis quos debitis omnis ratione modi dolor consequatur.</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="rounded" src="https://picsum.photos/id/20/180" alt="img" />
                            </div>
                        </article>
                        <article className="row mb-3 text-white">
                            <div className="col-sm-8 bg-secondary rounded p-3">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repellat odit facilis quos debitis omnis ratione modi dolor consequatur.</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="rounded" src="https://picsum.photos/id/10/180" alt="img" />
                            </div>
                        </article>
                    </section>
                    <aside className="col-sm-4 bg-success mb-3 rounded p-3 text-white">
                        <ul>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Commodi, tempora ex.</li>
                            <li>Ratione, quo quis.</li>
                            <li>Maiores, quia optio.</li>
                        </ul>
                    </aside>
                </div>
            </main>
        </>
    );
};

export default Grid;

// row => Bulunduğu yerde 12'lik grid sistem oluşturmamızı sağlar.
