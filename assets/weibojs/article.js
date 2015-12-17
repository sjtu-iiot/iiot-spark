$(document).ready(function(){
	var demo_info = [
			{	'title':'[resource]Fresh Online Courses Related with Apache Spark',
		      	'img':'img/data_science_camp.jpg',
		  	   	'content':'A link with several resources of online courses for Apache Spark. These courses are suitable for those who are eager to develop special applications based on Apache Spark Framework.',
		  	   	'url':'http://blog.revolutionanalytics.com/2015/01/a-first-look-at-spark.html'
		  	}
		  	,{
		  		'title':'[resource]A Machine Learning Approach to Classify Music by Mood',
		  		'img':'img/learning_approach.jpg',
		  		'content':"This article wants to share the author's experience with a recent data mining project. It's about building a classification model that can predict the mood of music based on song lyrics.",
		  		'url':'http://sebastianraschka.com/Articles/2014_musicmood.html'
		  	}
		  	,{
		  		'title':'[resource]A tutorial on predicting airline delays with Apache Spark',
		  		'img':'img/flght_predictor.jpg',
		  		'content':"This is a vivid example on the airline delays prediction task. The author gave a detailed illustration on how to manipulate Spark APIs for data cleaning and analysis.",
		  		'url':'http://nbviewer.ipython.org/github/ofermend/IPython-notebooks/blob/master/blog-part-2.ipynb'
		  	}
		  	,{
		  		'title':'[projects]Statistical analysis of recsys challenge 2015',
		  		'img':'img/acm.jpg',
		  		'content':"The data is presented in two files, one for clicks and another one for buys. Presentation on the clicks and buy from the same session together, to get a better sense of the problem. ",
		  		'url':'http://aloneindecember.com/words/recsys-challenge-part-i/'
		  	}
		  	,{
		  		'title':'[projects]Large-scale L-BFGS using MapReduce',
		  		'img':'img/l-bfgs.jpg',
		  		'content':"L-BFGS has been applied as an effective parameter estimation method for various machine learning algorithms since 1980s. It is important to scale up and parallelize L-BFGS effectively in a distributed system.",
		  		'url':'http://papers.nips.cc/paper/5333-consistency-of-weighted-majority-votes'
		  	}
		  	,{
		  		'title':'[projects]Weibo Analytics',
		  		'img':'img/social_network.jpg',
		  		'content':"Here are some interesting characteristics discovered from the online Weibo community. Our datasets include more than 1 million users along with 57 million Weibos communications.",
		  		'url':'weibo_analytics.html'
		  	}

			];
	for (var i=0; i<demo_info.length; i++)
	{
		var content = "";
		content +='<div class="article_container">';
		if (i % 2 == 0){
			content +=
				'<img src="'
			;
			content +=
				demo_info[i].img
			;
			content +=
				'" width="350" height="262" align="left"/><p><strong><span style="font-size:25px;display:block;margin-left:380px;">'
			;
			content +=
				demo_info[i].title
			;
			content +=
				'</span></strong></p><div class="projects_body_passage" >'
			;
			content +=
				demo_info[i].content
			;
			content +=
				'<a href="'
			;
			content +=
				demo_info[i].url
			;
			content +=
				'"><b>Details &raquo </b></a></div>'
			;
		} else {
			content +=
				'<img src="'
			;
			content +=
				demo_info[i].img
			;
			content +=
				'"  width="350" height="262" align="right"/><p><strong><span style="font-size:25px;text-align:left;display:block;">'
			;
			content +=
				demo_info[i].title
			;
			content +=
				'</span></strong></p><div class="projects_body_passage_left" >'
			;
			content +=
				demo_info[i].content
			;
			content +=
				'<a href="'
			;
			content +=
				demo_info[i].url
			;
			content +=
				'"><b>Details &raquo </b></a></div>'
			;
		}
		content +='</div>';
		$("#projects_content").append(content);
	}	
	$("#projects_content").append('<p><strong><span style="font-size: 28px;">\
			<a href="http://iwct.sjtu.edu.cn/Personal/xwang8/system.html">\
			CLICK HERE TO FIND MORE\
			</a><br/><br/></span></strong></p>');
});
