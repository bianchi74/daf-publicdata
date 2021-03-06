import React from 'react';


class UserStoryHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div>
            <div className="text-center">
              <h1>{this.props.story.title}</h1>
              <h3 dangerouslySetInnerHTML={{__html: this.props.story.subtitle}}></h3>

              {/* SHARE */}
              <div className="share">
                <span>Share</span>
                <ul className="Footer-socialIcons">
                  <li>
                    <a href="">
                      <span className="Icon Icon-facebook u-background-white"></span>
                      <span className="u-hiddenVisually">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="Icon Icon-twitter u-background-white"></span>
                      <span className="u-hiddenVisually">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href=""><span className="Icon Icon-youtube u-background-white"></span><span className="u-hiddenVisually">Youtube</span></a>
                  </li>
                </ul>
              </div>

              {/* USER */}
              <div className="user-box text-left">
                <img className="user-img" src="/img/user.png"/>
                <div className="user-caption">
                  <h4>
                    Joe Sample
                  </h4>
                  <div>
                    Keyboardist and compose
                  </div>
                </div>
              </div>

            </div>

            {/* USER BOX */}
            <div>
              <div className="img-user">

              </div>
              <div className="inline-block">
                <div>
                  {this.props.story.user}
                </div>
                <div>
                  {this.props.story.role}
                </div>
              </div>
            </div>
        </div>
      );
  }
}

export default UserStoryHeader;
