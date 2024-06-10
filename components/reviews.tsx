import Review from './review'

export default function Reviews() {
    return (
        <div className="flex flex-col gap-y-4 basis-1/2">
            <Review
                name="Donna Lynne E."
                review="What a pleasure to walk into our home and see an amazing transformation! Not only a fresh new colour but the brand new looking trim, smooth surfaces where there once were many holes and no mess to clean up. Nathan is a joy to work with and someone we trust. Thank you!"
            />
            <Review
                name="Sue G."
                review="Nathan did a tremendous job painting our whole main floor of our home, he was detail oriented, efficient, and on schedule with the timeline for a large project. He is friendly and trustworthy and I would recommend him to anyone."
            />
            <Review
                name="Lisa Young"
                review="Nathan drove 40 minutes out of Edmonton to repaint several rooms in our house. He was on time, did a fantastic job, and cleaned up after himself. I would highly recommend calling Nathan and refer him to all of my friends."
            />
        </div>
    )
}
