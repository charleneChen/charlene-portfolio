import Image from "next/image";
import AboutPageHeroImage from "@/public/about-page-hero-image.png"

export default function AboutPage() {
    return (
        <main>
            <section>
                <h1>
                    About PrintForge
                </h1>

                <div>
                    <div>
                        <Image
                            src={AboutPageHeroImage}
                            alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
                            loading="eager"
                        />
                    </div>
                    <div>
                        <p>
                            About PrintForge
                        </p>
                        <h2>
                            Empowering Makers Worldwide
                        </h2>
                        <p>
                            Founded in 2023, PrintForge has quickly become the
                            go-to platform for 3D printing enthusiasts, makers,
                            and professional designers to share and discover
                            amazing STL files for 3D printing.
                        </p>
                        <p>
                            Our mission is to foster a vibrant community where
                            creativity meets technology, enabling anyone to
                            bring their ideas to life through 3D printing.
                        </p>
                    </div>
                </div>
            </section>

            <hr aria-hidden="true" />

            <section>
                <div>
                    <h2>Key Features</h2>
                    <div>
                        <article>
                            <h3>
                                100K+ Models
                            </h3>
                            <p>
                                Access our vast library of community-created 3D
                                models, from practical tools to artistic
                                creations.
                            </p>
                        </article>
                        <article>
                            <h3>
                                Active Community
                            </h3>
                            <p>
                                Join thousands of makers who share tips, provide
                                feedback, and collaborate on projects.
                            </p>
                        </article>
                        <article>
                            <h3>
                                Free to Use
                            </h3>
                            <p>
                                Most models are free to download, with optional
                                premium features for power users.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <hr aria-hidden="true" />

            <section>
                <div>
                    <h2>Our Vision</h2>
                    <p>
                        At PrintForge, we believe that 3D printing is
                        revolutionizing the way we create, prototype, and
                        manufacture. Our platform serves as a bridge between
                        designers and makers, enabling the sharing of knowledge
                        and creativity that pushes the boundaries of what's
                        possible with 3D printing.
                    </p>
                    <p>
                        Whether you're a hobbyist looking for your next weekend
                        project, an educator seeking teaching materials, or a
                        professional designer wanting to share your creations,
                        PrintForge provides the tools and community to support
                        your journey in 3D printing.
                    </p>
                </div>
            </section>
        </main>
    )
}