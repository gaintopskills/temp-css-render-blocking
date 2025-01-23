import React, { useState } from 'react';

export const EventsGallery = () => {
    const categories = [
        "Cotton On",
        "Guess 3rd Street",
        "Bikini a Day by Guess",
        "Heidi Klum Bra Brunch",
        "All",
    ];

    const images = [
        { src: "/events-gallery/cotton-on/20170802_161812a.jpg", album: "Cotton On" },
        { src: "/events-gallery/cotton-on/20170802_161812b.jpg", album: "Cotton On" },
        { src: "/events-gallery/cotton-on/20170802_161812d.jpg", album: "Cotton On" },
        { src: "/events-gallery/cotton-on/20170802_161812c.jpg", album: "Cotton On" },
        { src: "/events-gallery/cotton-on/20170802_161812v.jpg", album: "Cotton On" },
        { src: "/events-gallery/cotton-on/cotton-on-events-with-custom-embroidered-products-los-angeles-la.jpg", album: "Cotton On" },
        
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-la.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-ca.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-7.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-6.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-4.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-3.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-2.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products-1.jpg", album: "Guess 3rd Street" },
        { src: "/events-gallery/guess/Guess-3rd-Street-Store-Event-Custom-Events-with-embroidered-products.jpg", album: "Guess 3rd Street" },
        
        { src: "/event-gallery/guess-bikini/guess-bikini1.jpg", album: "Bikini a Day by Guess" },
        { src: "/event-gallery/guess-bikini/guess-bikini2.jpg", album: "Bikini a Day by Guess" },
        { src: "/event-gallery/guess-bikini/guess-bikini3.jpg", album: "Bikini a Day by Guess" },
        { src: "/event-gallery/guess-bikini/guess-bikini4.jpg", album: "Bikini a Day by Guess" },
        { src: "/event-gallery/guess-bikini/guess-bikini5.jpg", album: "Bikini a Day by Guess" },
        { src: "/event-gallery/guess-bikini/guess-bikini6.jpg", album: "Bikini a Day by Guess" },
       
        { src: "/event-gallery/heidi-klum/los-angeles-custom-embroidery-event-heidi-klum-Bra-Brunch-los-angeles.jpg", album: "Heidi Klum Bra Brunch" },
        { src: "/event-gallery/los-angeles-custom-embroidery-event-heidi-klum-Bra-Brunch-la-model.jpg", album: "Heidi Klum Bra Brunch" },
        { src: "/event-gallery/heidi-klum/los-angeles-custom-embroidery-event-heidi-klum-Bra-Brunch-la-embroidery-services.jpg", album: "Heidi Klum Bra Brunch" },
        { src: "/event-gallery/los-angeles-custom-embroidery-event-heidi-klum-Bra-Brunch-la-embroidery-services-2.jpg", album: "Heidi Klum Bra Brunch" },
        { src: "/event-gallery/heidi-klum/los-angeles-custom-embroidery-event-heidi-klum-bra-brunch-la-2017.jpg", album: "Heidi Klum Bra Brunch" },
        { src: "/event-gallery/heidi-klum/los-angeles-custom-embroidery-event-heidi-klum-Bra-Brunch-la.jpg", album: "hHeidi Klum Bra Brunches" },
        { src: "/event-gallery/heidi-klum/los-angeles-custom-embroidery-event-heidi-klum-Bra-Brunch-dtla.jpg", album: "Heidi Klum Bra Brunch" },
        { src: "/event-gallery/heidi-klum/los-angeles-custom-embroidery-event-heidi-klum-Bra-Brunch-best-embroidery-in-la.jpg", album: "Heidi Klum Bra Brunch" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredImages = selectedCategory === "All"
        ? images
        : images.filter((image) => image.album === selectedCategory);

    return (
        <div className="min-h-screen p-6 bg-black text-white">
           
                <h1>Gallery</h1>
            <main className="p-4">
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md font-bold shadow-md ${
                                selectedCategory === category
                                    ? "bg-gray-600 text-white"
                                    : "bg-gray-400 hover:bg-red-800 text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.album}
                            loading="lazy"
                            className="h-96 rounded shadow-md object-cover w-full transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
                            onClick={() => setLightboxImage(image)}
                        />
                    ))}
                </div>

                {lightboxImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <img
                                src={lightboxImage.src}
                                alt={lightboxImage.album}
                                className="max-w-3xl rounded shadow-lg"
                            />
                            <button
                                onClick={() => setLightboxImage(null)}
                                className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full"
                            >
                                ✖
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default EventsGallery;
