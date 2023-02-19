const ServiceCard = ({ children, title, description }) => {
  return (
    <div className="col-md-6 col-sm-6 m-b30">
      <div className="wt-icon-box-wraper bx-style-1 p-a30 bg-white">
        <div className="icon-content">
          <h3 className="wt-tilte wt-white-spaces font-16 font-weight-600 text-uppercase">
            {title}
          </h3>
          <p>{description}</p>
          {children && <>{children}</>}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
