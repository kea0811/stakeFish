/* eslint-disable consistent-return */
import React, { useEffect } from 'react';

import {
  IoLogoFacebook, IoLogoTwitter, IoLogoReddit, IoLogoSlack, IoGlobeOutline, IoArrowBack,
} from 'react-icons/io5';
import { FaTelegram } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Swal from 'sweetalert2';

import { fetcher } from '../../library';

const Detail = () => {
  const { exchangeid } = useParams();
  const { data, isValidating } = useSWR(exchangeid ? `/exchanges/${exchangeid}` : '', fetcher);
  const displayMapping = {
    facebook_url: {
      label: 'Facebook',
      prefix: 'https://www.facebook.com/',
      icon: IoLogoFacebook,
    },
    twitter_handle: {
      label: 'Twitter',
      prefix: 'https://www.twitter.com/',
      icon: IoLogoTwitter,
    },
    reddit_url: {
      label: 'Reddit',
      prefix: 'https://www.reddit.com/',
      icon: IoLogoReddit,
    },
    slack_url: {
      label: 'Slack',
      prefix: 'https://www.slack.com/',
      icon: IoLogoSlack,
    },
    telegram_url: {
      label: 'Telegram',
      prefix: 'https://t.me/',
      icon: FaTelegram,
    },
  };

  useEffect(() => {
    if (isValidating) {
      Swal.fire({
        title: 'Loading',
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }
  }, [isValidating]);

  const renderSocialMedia = () => {
    if (!data) return;

    const {
      facebook_url, twitter_handle, reddit_url, slack_url, telegram_url,
    } = data || {};
    const allSocialMedia = {
      facebook_url, twitter_handle, reddit_url, slack_url, telegram_url,
    };

    return Object.entries(allSocialMedia).map(([key, item]) => {
      const { icon: Icon, label, prefix } = displayMapping[key];
      return item !== '' && (
        <a href={!item.includes('http') ? `${prefix}${item}` : item} key={key} className="break-words">
          <div className="flex items-center gap-2">
            <Icon className="text-xl" />
            {' '}
            {label}
          </div>
        </a>
      );
    });
  };

  const renderOtherSocialMedia = () => {
    if (!data) return;

    let count = 1;
    const result = [];

    while (data[`other_url_${count}`]) {
      const key = `other_url_${count}`;
      const item = data[key];

      result.push(
        <a href={item} key={key} className="break-all">
          <div className="flex items-center gap-2">
            <IoGlobeOutline className="text-xl" />
            {' '}
            Other link
            {' '}
            {count}
          </div>
        </a>,
      );
      count++;
    }

    return result;
  };

  if (isValidating) return;

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center p-5">
        <a href="/" className="flex-row flex items-center gap-4">
          <IoArrowBack className="text-2xl" />
          <span className="text-lg">Back</span>
        </a>
      </div>
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="flex flex-1 flex-col justify-center items-center gap-4">
          <span className="text-3xl font-bold">
            #
            {data?.trust_score_rank}
          </span>
          <img src={data?.image} alt="logo" className="rounded-full w-28 h-28" />
          <span className="text-3xl font-bold">{data?.name}</span>
        </div>
        <div className="flex flex-1 flex-col xl:flex-col gap-8">
          <div className="flex flex-row gap-6 justify-center xl:justify-start">
            <div className="flex flex-col justify-center items-center">
              <span className="text-gray-400">TRUST SCORE</span>
              <span className="text-4xl">{data?.trust_score}</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-gray-400">YEAR OF ESTABLISHMENT</span>
              <span className="text-4xl">{data?.year_established}</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full px-11 xl:px-0">
            <span className="text-gray-400">COUNTRY</span>
            <span className="text-2xl">{data?.country}</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-start items-start w-full px-11 xl:px-0">
          <span className="text-gray-400">LINKS</span>
          <span className="flex flex-col gap-2">
            {
              renderSocialMedia()
            }
            {
              renderOtherSocialMedia()
            }
          </span>
        </div>
      </div>
      {
        data?.description !== '' && (
          <div className="flex flex-col px-11 mt-6 xl:mt-10">
            <span className="text-gray-400">DESCRIPTION</span>
            <span className="text-base xl:text-lg">{data?.description}</span>
          </div>
        )
      }
    </div>
  );
};

export default Detail;
