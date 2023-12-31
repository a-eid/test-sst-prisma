// Utilities for emitting cloudwatch metrics from AWS Lambda
// https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/metrics/

import { Metrics, MetricUnits } from '@aws-lambda-powertools/metrics';
import { getSstStage, getSstApp } from '@common/env';
import { APP_NAME } from '@common/index';

const stage = getSstStage();
const app = getSstApp();
export const metrics = new Metrics({ serviceName: APP_NAME, namespace: `${app}/${stage}` });

// add your custom metric names here
export type MetricName = 'SaidHello';

export const incrementMetric = (metric: MetricName, count = 1) => metrics.addMetric(metric, MetricUnits.Count, count);
