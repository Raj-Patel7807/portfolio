import React from "react";

import "./achievements.css";

import CodeForces from "../../assets/Socials/CodeForces.png";
import CodeChef from "../../assets/Socials/CodeChef.png";
import LeetCode from "../../assets/Socials/LeetCode.png";
import Codolio from "../../assets/Socials/Codolio.svg";

export const Achievements = () => {
    return (
        <>
            <div className="achievements">
                <div className="achiev-title" data-aos="fade-down" data-aos-duration="1000">
                    <h1>
                        <u>Achievements</u> 🎯
                    </h1>
                </div>
                <div className="coding-profiles">
                    <div className="code-profile codeforces" data-aos="fade-right" data-aos-duration="1000">
                        <div className="code-profile-logo">
                            <a
                                href="https://codeforces.com/profile/Raj_Patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={CodeForces}
                                    alt="Codeforces"
                                    title="Codeforces"
                                />
                            </a>
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">
                                <a
                                    href="https://codeforces.com/profile/Raj_Patel_7807"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Codeforces
                                </a>
                            </p>
                            <div className="code-profile-rating">
                                <p>
                                    1600+ Problems, [ Expert ] (Max Rating :
                                    1621)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="code-profile codechef" data-aos="fade-left" data-aos-duration="1000">
                        <div className="code-profile-logo">
                            <a
                                href="https://www.codechef.com/users/raj_patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={CodeChef}
                                    alt="CodeChef"
                                    title="CodeChef"
                                />
                            </a>
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">
                                <a
                                    href="https://www.codechef.com/users/raj_patel_7807"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Codechef
                                </a>
                            </p>
                            <div className="code-profile-rating">
                                <p>
                                    100+ Problems, [ ⭐⭐⭐ ] (Max Rating : 1721)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="code-profile leetcode" data-aos="fade-right" data-aos-duration="1000">
                        <div className="code-profile-logo">
                            <a
                                href="https://leetcode.com/u/Raj_Patel_7807/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={LeetCode}
                                    alt="LeetCode"
                                    title="LeetCode"
                                />
                            </a>
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">
                                <a
                                    href="https://leetcode.com/u/Raj_Patel_7807/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Leetcode
                                </a>
                            </p>
                            <div className="code-profile-rating">
                                <p>500+ Problems, [] (Max Rating : 1675)</p>
                            </div>
                        </div>
                    </div>
                    <div className="code-profile codolio" data-aos="fade-left" data-aos-duration="1000">
                        <div className="code-profile-logo">
                            <a
                                href="https://codolio.com/profile/Raj_Patel_7807"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={Codolio}
                                    alt="Codolio"
                                    title="Codolio"
                                />
                            </a>
                        </div>
                        <div className="code-profile-bio">
                            <p className="code-profile-name">
                                <a
                                    href="https://codolio.com/profile/Raj_Patel_7807"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Codolio
                                </a>
                            </p>
                            <div className="code-profile-rating">
                                <p>
                                    2200+ Problems Solved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="coding-certificate">
                    <p className="coding-certificate-title" data-aos="fade-right" data-aos-duration="1000"> Certificates </p>
                    <div className="coding-certi" data-aos="fade-left" data-aos-duration="1000">
                        <p> ICPC </p>
                    </div>
                </div>
                <hr />
                <div className="coding-achievement">
                    <p className="coding-achievement-title" data-aos="fade-right" data-aos-duration="1000"> Contest Achievements </p>
                    <div className="coding-achieve" data-aos="fade-left" data-aos-duration="1000">
                        <p>Rank 268 in Codechef Starters 186 (Div. 3)</p>
                    </div>
                    <div className="coding-achieve" data-aos="fade-left" data-aos-duration="1000">
                        <p>Rank 685 in Codeforces Round 1021 (Div. 2)</p>
                    </div>
                </div>
            </div>
        </>
    );
};
