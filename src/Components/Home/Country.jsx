

const Country = () => {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Countries Section</h2>
            <div className="py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-md p-2 shadow">
                    <figure><img className="rounded-md" src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/18174406/bangladesh-places-to-visit-FEATURE-compressed.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bangladesh</h2>
                        <p>Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger.</p>
                        <div className="card-actions justify-end">
                            <button className="btn text-white hover:text-black bg-[#400f0fd9]">Other torest sport</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;