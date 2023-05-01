function MiniCard({title, img_src, onBtnClick}) {
    return (
        <div className="mini-card-container">
            <p className="mini-card-title">{title}</p>
            <img src={img_src} />
            <p className="mini-card-desc">{desc}</p>
            <div className="mini-card-btn" onClick={onBtnClick}>{title}</div>
        </div>
    )
}

export default MiniCard;